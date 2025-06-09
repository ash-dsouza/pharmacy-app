from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

# Load environment variables from .env
load_dotenv()

# Environment-safe DB connection
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL is not set. Please define it in your .env file.")

# SQLAlchemy setup
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB Model
class Contact(Base):
    __tablename__ = 'contacts'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    message = Column(String(500))

# Pydantic schema
class ContactCreate(BaseModel):
    name: str
    email: str
    message: str

# Create the table
Base.metadata.create_all(bind=engine)

# API endpoint
@app.post("/contact")
def submit_contact(contact: ContactCreate):
    db = SessionLocal()
    db_contact = Contact(**contact.dict())

    try:
        db.add(db_contact)
        db.commit()
        db.refresh(db_contact)
        return {"success": True, "message": "Message received!"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Error saving contact message")
    finally:
        db.close()

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://127.0.0.1:8000/contact';

  constructor(private http: HttpClient) {}

  sendMessage(formData: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}

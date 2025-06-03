import { Component, OnInit } from '@angular/core';
import { Api } from '../../../app/services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
message: string = '';

  constructor(private apiService: Api) {}

  ngOnInit() {
    this.apiService.getWelcomeMessage().subscribe({
      next: (response) => {
        this.message = response.message;
      },
      error: (err) => {
        console.error('Error fetching backend message:', err);
      }
    });
  }

 topProducts = [
  {
    name: 'Paracetamol',
    image: '/images/Paracetamol.jpg',
    description: 'Effective for fever and mild pain relief.'
  },
  {
    name: 'Glycomet GP1',
    image: '/images/Glycomet GP1.jpg',
    description: 'Treats type 2 diabetes mellitus also known as Diabetes Mellitus .'
  },
  {
    name: 'Candid Dusting Powder',
    image: '/images/Candid.jpg',
    description: 'Antifungal medication that is used to manage a variety of fungal skin infections.'
  }
];


}


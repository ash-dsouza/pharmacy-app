import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
 highlights = [
  { icon: 'bi-shield-check', title: '100% Genuine Medicines', description: 'Sourced from licensed pharmacies and verified suppliers.' },
  { icon: 'bi-truck', title: 'Fast & Safe Delivery', description: 'Get your medicines delivered quickly with real-time tracking.' },
  { icon: 'bi-headset', title: '24/7 Support', description: 'Dedicated customer support anytime you need help.' },
  { icon: 'bi-bag-heart', title: 'Wide Range of Products', description: 'From prescriptions to wellness, we’ve got it all.' }
];


}

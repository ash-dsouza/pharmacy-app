import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  submitForm() {
  this.contactService.sendMessage(this.contactForm).subscribe({
    next: (res) => {
      this.successMessage = 'Message sent successfully!';
      this.errorMessage = '';
      this.contactForm = { name: '', email: '', message: '' };

      // Hide the success message after 3 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    },
    error: () => {
      this.errorMessage = 'Something went wrong. Please try again.';
      this.successMessage = '';

      // Hide the error message after 3 seconds
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
  });
}


}

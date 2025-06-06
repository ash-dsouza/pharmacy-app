import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Make sure the import points to 'home.component.ts'
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

// Export routes array only
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];

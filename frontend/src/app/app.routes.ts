import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // Make sure the import points to 'home.component.ts'

// Export routes array only
export const routes: Routes = [
  { path: '', component: Home },
];

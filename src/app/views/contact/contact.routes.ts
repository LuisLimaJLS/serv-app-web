import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const contactRoutes: Routes = [
  {
    path:'page',
    component: ContactPageComponent
  },
  {
    path:'**',
    redirectTo: '/contact/page'
  }
];

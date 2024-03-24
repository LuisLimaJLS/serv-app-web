import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SubscriberPageComponent } from './pages/subscriber-page/subscriber-page.component';
import { EmissionPageComponent } from './pages/emission-page/emission-page.component';

export const dashboardRoutes: Routes = [
  {
    path:'',
    component: DashboardPageComponent
  },
  {
    //path:'subscriber/:id_abonado',
    path:'subscriber',
    component: SubscriberPageComponent
  },
  {
    //path:'emission/:id_emision',
    path:'emission',
    component: EmissionPageComponent
  },
  {
    path:'**',
    redirectTo: '/home'
  }
];

import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const dashboardRoutes: Routes = [
  {
    path:'',
    component: DashboardPageComponent
  },
  {
    path:'**',
    redirectTo: '/home'
  }
];

import { Routes } from '@angular/router';
import { AlertsPageComponent } from './pages/alerts-page/alerts-page.component';

export const alertsRoutes: Routes = [
  {
    path:'page',
    component: AlertsPageComponent,
  },
  {
    path:'**',
    redirectTo: '/alerts/page'
  }
];

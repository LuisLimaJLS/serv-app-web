import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SubscriberPageComponent } from './pages/subscriber-page/subscriber-page.component';
import { EmissionPageComponent } from './pages/emission-page/emission-page.component';
import { SettingsComponent } from '@shared/components/settings/settings.component';
import { ProfileComponent } from '@shared/components/profile/profile.component';

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
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path:'**',
    redirectTo: '/home'
  }
];

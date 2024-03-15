import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const homeRoutes: Routes = [
  //{
  //  path: '',
  //  component: HomePageComponent
  //},
  {
    path: 'home',
    loadChildren: () => import('@views/dashboard/dashboard.routes').then(m => m.dashboardRoutes)
  },
  {
    path: 'search',
    loadChildren: () => import('@views/search/search.routes').then(m => m.searchRoutes)
  },
  {
    path: 'history',
    loadChildren: () => import('@views/history/history.routes').then(m => m.historyRoutes)
  },
  {
    path: 'alerts',
    loadChildren: () => import('@views/alerts/alerts.routes').then(m => m.alertsRoutes)
  },
  {
    path: 'contact',
    loadChildren: () => import('@views/contact/contact.routes').then(m => m.contactRoutes)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const searchRoutes: Routes = [
  {
    path:'page',
    component: SearchPageComponent
  },
  {
    path:'**',
    redirectTo: '/search/page'
  }
];

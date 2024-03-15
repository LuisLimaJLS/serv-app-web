import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
    //loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
  },
  {
    path: 'favorites',
    component: HomePageComponent
    //loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'history',
    component: HomePageComponent
   // loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

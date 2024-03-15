import { Routes } from '@angular/router';
import { HomePageComponent } from '@views/home/pages/home-page/home-page.component';


export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: '',
    //component: HomePageComponent,
    loadChildren: () => import('./views/home/home.routes').then(m => m.homeRoutes),
    //canActivate: [sessionGuard]
  }
];

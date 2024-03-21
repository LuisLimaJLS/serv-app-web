import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  try {
    const token: boolean = inject(CookieService).check('token')
    if (!token) {
      inject(Router).navigate(['/', 'auth'])
    }
    return token

  } catch (e) {
    console.log('Algo sucedio!!', e);
    return false
  }
};

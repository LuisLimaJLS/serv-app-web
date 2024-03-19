import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { SidebarNavHelper } from '@coreui/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatPaginatorIntl } from '@angular/material/paginator';
//import { injectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideHttpClient (
      //withInterceptors ([injectSessionInterceptor])
    ),
    SidebarNavHelper,
    provideAnimations(),
    MatPaginatorIntl

  ],

};

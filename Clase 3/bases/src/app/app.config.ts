import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    //HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};

//1. Subirlo a git 
//2. Arreglar el enrutado de angular
//3. Generar nuevo build y reamplazar
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {API_URL} from "./core/http/api-url.token";
import {environment} from "../environments/environment.prod";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
  ]
};

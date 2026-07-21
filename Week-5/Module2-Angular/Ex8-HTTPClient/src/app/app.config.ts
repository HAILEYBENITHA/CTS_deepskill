import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler/error-handler.interceptor';
import { LoadingInterceptor } from './interceptors/loading/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        AuthInterceptor,
        ErrorHandlerInterceptor,
        LoadingInterceptor
      ])
    )
  ]
};

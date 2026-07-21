import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { courseReducer } from './app/store/course/course.reducer';
import { enrollmentReducer } from './app/store/enrollment/enrollment.reducer';
import { CourseEffects } from './app/store/course/course.effects';
import { provideEffects } from '@ngrx/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideStore({ course: courseReducer, enrollment: enrollmentReducer }),
    provideStoreDevtools({ maxAge: 25 }),
    provideEffects([CourseEffects])
  ]
}).catch((err) => console.error(err));

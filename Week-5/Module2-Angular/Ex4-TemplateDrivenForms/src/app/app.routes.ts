import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { EnrollmentFormComponent } from '../pages/enrollment-form/enrollment-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'profile', component: StudentProfileComponent },
  { path: 'enroll', component: EnrollmentFormComponent }
];

export const appRoutes = routes;

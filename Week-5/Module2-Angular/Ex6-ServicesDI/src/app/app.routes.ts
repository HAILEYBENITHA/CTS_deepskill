import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CourseListComponent } from '../course-list/course-list.component';
import { StudentProfileComponent } from '../student-profile/student-profile.component';
import { CourseSummaryWidgetComponent } from '../components/course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../components/notification/notification.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'profile', component: StudentProfileComponent }
];

export const appRoutes = routes;

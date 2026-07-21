import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';
import { enrollInCourse, selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  loading$: Observable<boolean> = this.store.select(selectCoursesLoading);
  enrolledIds$: Observable<number[]> = this.store.select(selectEnrolledIds);

  constructor(private store: Store) {
    this.store.dispatch(loadCourses());
  }

  onEnroll(courseId: number): void {
    this.store.dispatch(enrollInCourse({ courseId }));
  }
}

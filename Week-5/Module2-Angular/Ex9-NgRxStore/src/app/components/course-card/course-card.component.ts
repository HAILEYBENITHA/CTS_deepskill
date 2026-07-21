import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { enrollInCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course: any;
  enrolledIds$ = this.store.select(selectEnrolledIds);

  constructor(private store: Store) {}

  onEnroll(): void {
    this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
  }
}

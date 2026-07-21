import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: Course[] = [];
  errorMessage = '';

  constructor(private courseService: CourseService) {
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.courses = courses),
      error: (err) => (this.errorMessage = err.message),
      complete: () => console.log('Courses loaded')
    });
  }
}

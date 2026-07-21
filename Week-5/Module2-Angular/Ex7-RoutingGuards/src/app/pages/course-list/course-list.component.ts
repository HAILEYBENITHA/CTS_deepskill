import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: any[] = [];
  searchTerm = '';

  constructor(private courseService: CourseService, private router: Router) {
    this.courses = this.courseService.getCourses();
  }

  onCourseClick(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  onSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm }
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 3, name: 'Web Development', code: 'CS103', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 4, name: 'Database Systems', code: 'CS104', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 5, name: 'Operating Systems', code: 'CS105', credits: 2, gradeStatus: 'passed', enrolled: false }
  ];
  isLoading = true;

  constructor() {}

  ngOnInit(): void {
    // Show loading message for 1.5 seconds, then hide it
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy improves performance by tracking items by their unique id
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}

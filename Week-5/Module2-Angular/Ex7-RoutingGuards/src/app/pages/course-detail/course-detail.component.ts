import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  course: any;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.course = this.courseService.getCourseById(Number(id));
    }
  }
}

import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course = {
    id: 0,
    name: '',
    code: '',
    credits: 0,
    gradeStatus: 'pending'
  };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}

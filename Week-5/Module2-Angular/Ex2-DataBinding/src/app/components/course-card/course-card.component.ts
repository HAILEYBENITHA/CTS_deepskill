import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course: Course = { id: 0, name: '', code: '', credits: 0 };
  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prev = changes['course'].previousValue;
      const curr = changes['course'].currentValue;
      console.log('Course changed from', prev, 'to', curr);
    }
  }

  onEnroll(): void {
    this.enrollRequested.emit(this.course.id);
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  enrolled: boolean;
}

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input() course: Course = {
    id: 0,
    name: '',
    code: '',
    credits: 0,
    gradeStatus: 'pending',
    enrolled: false
  };

  isExpanded = false;

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Getter for ngClass binding - keeps template clean
  get cardClasses(): Record<string, boolean> {
    return {
      'card--enrolled': this.course.enrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // Dynamic left border colour based on gradeStatus
  get borderStyle(): Record<string, string> {
    const colorMap: Record<string, string> = {
      passed: 'green',
      failed: 'red',
      pending: 'grey'
    };
    return { 'border-left': `5px solid ${colorMap[this.course.gradeStatus] || 'grey'}` };
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  submitted = false;

  // Model object bound to the template-driven form
  enrollment = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  onSubmit(form: any): void {
    console.log('Form value:', form.value);
    console.log('Form valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  onReset(form: any): void {
    form.resetForm();
    this.submitted = false;
  }
}

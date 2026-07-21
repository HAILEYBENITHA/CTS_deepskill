import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';

@NgModule({
  declarations: [ReactiveEnrollmentFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EnrollmentRoutingModule
  ]
})
export class EnrollmentModule {}

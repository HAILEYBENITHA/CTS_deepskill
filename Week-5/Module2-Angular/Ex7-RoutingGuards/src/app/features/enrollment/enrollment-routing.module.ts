import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';

const routes: Routes = [
  { path: '', component: ReactiveEnrollmentFormComponent },
  { path: 'reactive', component: ReactiveEnrollmentFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollmentRoutingModule {}

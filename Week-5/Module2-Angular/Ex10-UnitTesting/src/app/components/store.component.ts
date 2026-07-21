import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-store',
  standalone: true,
  template: `
    <div *ngIf="loading$ | async" class="loading">Loading...</div>
    <div *ngFor="let c of courses$ | async" class="card">
      {{ c.name }}
    </div>
  `
})
export class StoreComponent {
  courses$ = this.store.select((state: any) => state.course.courses);
  loading$ = this.store.select((state: any) => state.course.loading);

  constructor(private store: Store) {}
}

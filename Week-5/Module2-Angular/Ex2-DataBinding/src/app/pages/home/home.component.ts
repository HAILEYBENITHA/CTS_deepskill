import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../components/course-card/course-card.component';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}

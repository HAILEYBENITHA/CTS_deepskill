import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses via GET', () => {
    const mockCourses = [
      { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' }
    ];

    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(1);
      expect(courses[0].name).toBe('Data Structures');
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should handle 500 error', () => {
    service.getCourses().subscribe({
      next: () => fail('should have failed'),
      error: (err) => expect(err.message).toBe('Server error')
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });
});

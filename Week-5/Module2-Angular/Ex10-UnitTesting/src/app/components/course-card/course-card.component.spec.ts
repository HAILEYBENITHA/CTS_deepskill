import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';

const mockCourse = {
  id: 1,
  name: 'Data Structures',
  code: 'CS101',
  credits: 4,
  gradeStatus: 'passed' as const
};

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideMockStore({ initialState: {} })]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the props', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    expect(component.course).toEqual(mockCourse);
  });

  it('should display course name in h3', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toBe(mockCourse.name);
  });

  it('should emit enrollRequested when Enroll is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');
    fixture.debugElement.query(By.css('button')).nativeElement.click();
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });
});

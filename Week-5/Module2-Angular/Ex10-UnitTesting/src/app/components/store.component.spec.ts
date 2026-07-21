import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreComponent } from './store.component';

const initialState = {
  course: {
    courses: [
      { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' }
    ],
    loading: false,
    error: null
  }
};

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading indicator when loading is true', () => {
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });
    fixture.detectChanges();
    const loading = fixture.debugElement.query(By.css('.loading'));
    expect(loading).not.toBeNull();
  });
});

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// LoadingService: shared loading state used by the loading interceptor.
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(state: boolean): void {
    this.isLoadingSubject.next(state);
  }
}

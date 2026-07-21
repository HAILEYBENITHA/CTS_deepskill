import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// AuthService used by AuthGuard to check login status.
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = true;

  isLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }
}

import { Injectable } from '@angular/core';

// NotificationService used to demonstrate component-level providing.
// Each component instance that provides this service gets its own separate instance.
@Injectable()
export class NotificationService {
  show(message: string): void {
    console.log('Notification:', message);
  }
}

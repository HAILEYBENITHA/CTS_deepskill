import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

// NotificationComponent: provides NotificationService at component level.
// This creates a new, separate instance scoped to this component and its children.
@Component({
  selector: 'app-notification',
  standalone: true,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  providers: [NotificationService] // component-level provider
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {
    // Component-level providing creates a new, separate instance scoped to
    // this component, useful when you need isolated state per component
    // instance (e.g., a form wizard with multiple steps).
    this.notificationService.show('Local notification for this component');
  }
}

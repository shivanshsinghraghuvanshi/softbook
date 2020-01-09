import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'softbook-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  
  notifications:any;
  constructor(private notificationService: NotificationService) { 
    this.notifications = notificationService.notifications;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.notificationService.resetUnread();
   }


}

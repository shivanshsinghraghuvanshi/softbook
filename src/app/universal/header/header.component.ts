import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification/notification.service';

@Component({
  selector: 'softbook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  unread:number = 0;
  _subscription: any;

  constructor(notificationService:NotificationService) {
    this._subscription = notificationService.notificationChange.subscribe((newCount)=>{
      this.unread = newCount;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
     this._subscription.unsubscribe();
   }

}

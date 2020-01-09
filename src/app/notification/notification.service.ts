import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationChange: Subject<number> = new Subject<number>();
  unread:number = 0;
  notifications:any = [];
  constructor() { }

  updateMovie(movie,isAdded):void{
    this.unread++;
    let time = new Date();
    this.notifications.push({'time':time,'movie':movie,'isAdded':isAdded});
    this.notificationChange.next(this.unread);
  };

  resetUnread(){
    this.unread = 0;
    this.notificationChange.next(this.unread);
  }

}

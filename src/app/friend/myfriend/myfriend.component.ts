import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppGuard } from '../../guard/app.guard';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-myfriend',
  templateUrl: './myfriend.component.html',
  styleUrls: ['./myfriend.component.css']
})
export class MyfriendComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private _notification = '';
  friends;
  userid;
  constructor(private guard: AppGuard, private router: Router, private http: Http) { }

  ngOnInit() {
    this.userid = this.guard.GetUser()['id'];
    this.getfriends();
  }
  Onclick(id) {
    this.http.post('http://127.0.0.1:8000/removefriend', { user: id, id: this.userid }).subscribe(response => {
      // tslint:disable-next-line:triple-equals
      if (response['_body'] == 'ok') {
        this.getfriends();
        /* to be sure that the emitted message is unique */
        // tslint:disable-next-line:prefer-const
        let time = new Date();
        this.notify.emit(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
        alert('Friend Removed :)');
      }
    });
  }
  @Input()
  set notification(notification: string) {
    this._notification = notification;
    this.getfriends();
  }
  protected getfriends() {
    this.http.post('http://127.0.0.1:8000/getfriends', { user: this.userid }).subscribe(feedback => {
      this.friends = Object.values(JSON.parse(feedback['_body']).friends);

    });
  }
}

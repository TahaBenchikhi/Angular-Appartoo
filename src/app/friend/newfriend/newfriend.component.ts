import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AppGuard } from '../../guard/app.guard';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-newfriend',
  templateUrl: './newfriend.component.html',
  styleUrls: ['./newfriend.component.css']
})
export class NewfriendComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private _notification = '';
  friends;
  private id;
  searchedfriend;
  constructor(private guard: AppGuard, private router: Router, private http: Http) { }

  ngOnInit() {
    this.id = this.guard.GetUser()['id'];
    this.SendFriendsHtpp();
  }
  private SendFriendsHtpp() {
    this.http.post('http://127.0.0.1:8000/getnewfriends', { user: this.id }).subscribe(response => {
      this.friends = Object.values(JSON.parse(response['_body']));

    });
  }
  @Input()
  set notification(notification: string) {
    this._notification = notification;
    this.SendFriendsHtpp();
  }

  Onclick(id) {
    this.http.post('http://127.0.0.1:8000/addfriend', { user: id, id: this.id }).subscribe(response => {
      // tslint:disable-next-line:triple-equals
      if (response['_body'] == 'ok') {
        this.SendFriendsHtpp();
        /* to be sure that the emitted message is unique */
        // tslint:disable-next-line:prefer-const
        let time = new Date();
        this.notify.emit(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
        alert('Friend added :)');
      }
    });
  }
  OnKeyup(input: HTMLInputElement) {
    this.searchedfriend = '';
    // tslint:disable-next-line:triple-equals
    if (input.value != '') {
    for (let i = 0; i < this.friends.length; i++) {
      // tslint:disable-next-line:triple-equals
      if ((this.friends[i].nom.toLowerCase()).indexOf(input.value.toLowerCase()) !== -1) {
        this.searchedfriend = this.friends[i];
      }
      }
    }
  }
}

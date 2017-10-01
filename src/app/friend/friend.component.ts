import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  notification: string;
  constructor(private guard: AppGuard) {

  }

  ngOnInit() {
  }
  beNotified(event: string) {
    this.notification = event;
  }
}

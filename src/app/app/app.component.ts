import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppGuard } from '../guard/app.guard';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  route: string;
  constructor(private router: Router, private location: Location, private guard: AppGuard) {

  }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (this.location.path() != '') {
        this.route = this.location.path();
      } else {
        this.route = 'Home';
      }
    });
  }
  LogOut() { this.guard.LogOut(); this.router.navigate(['/']);}





}

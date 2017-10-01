import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AppGuard implements CanActivate {
  token = false;
  user;
  constructor(private router: Router) {
  }
  LogIn() { this.token = true; }
  LogOut() { this.token = false; }
  canActivate() {
    if (this.token) {
      return this.token;
    }
    // tslint:disable-next-line:one-line
    else {
      this.router.navigate(['/login']);
    }
  }
  SetUser(user: JSON) { this.user = user; }
  GetUser() { return this.user; }
}

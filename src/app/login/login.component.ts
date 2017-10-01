import { Component, OnInit } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private guard: AppGuard, private router: Router, private http: Http) {
  }
  Onclick() {
    this.http.post('http://127.0.0.1:8000/checking', { username: this.username, password: this.password }).subscribe(response => {
      if (JSON.parse(response['_body'])) {
        this.guard.SetUser(JSON.parse(response['_body']));
        this.guard.LogIn();
        this.router.navigate(['/friends']);
      }
      else {

        alert('!!!!Utilisteur Inconu Veuillez resaisir un Email et Password Valid !!!!');
        this.router.navigate(['/login']);
      }

    });

  }

  ngOnInit() {
    if (this.guard.canActivate() == true) { this.router.navigate(['/friends']); }
  }

}

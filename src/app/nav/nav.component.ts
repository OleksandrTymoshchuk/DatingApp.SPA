import { AlertifyService } from './../_services/alertify.service';
import { User } from './../models/User';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: User = new User();

  constructor(public authService: AuthService, private alerify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
  this.authService.login(this.model).subscribe(next => {
    this.alerify.success('Logged in successfully');
  }, error => {
    this.alerify.error('Failed to login');
  }, () => {
    this.router.navigate(['/members']);
  });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alerify.message('Logged out');
    this.router.navigate(['/home']);
  }

}

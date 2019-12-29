import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForAuthentication } from '../_models/userForAuthentication';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: UserForAuthentication = new UserForAuthentication();

  constructor(public authService: AuthService, private alerify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
  this.authService.login(this.user).subscribe(next => {
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
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alerify.message('Logged out');
    this.router.navigate(['/home']);
  }

}

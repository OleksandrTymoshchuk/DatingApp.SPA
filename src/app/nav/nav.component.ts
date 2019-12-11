import { User } from './../models/User';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
  this.authService.login(this.model).subscribe(next => {
    console.log('Logged in successfully');
  }, error => {
    console.log('Failed to login');
  });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}

import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp-SPA';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.decodeJwtToken();
  }
}

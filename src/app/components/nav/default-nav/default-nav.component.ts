import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-nav',
  templateUrl: './default-nav.component.html',
  styleUrls: ['./default-nav.component.css'],
})
export class DefaultNavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout() {
    return this.authService.logout()
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_INTERFACE, SIGN_UP_INTERFACE } from '../interfaces/auth.interface';
import { USER_INTERFACE } from '../interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://monyflow.herokuapp.com/auth';

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  me() {
    return this.http.get(`${this.authUrl}/me`, {
      headers: {
        authorization: window.localStorage.getItem('token')!,
      },
    });
  }

  singup(userData: SIGN_UP_INTERFACE) {
    return this.http.post(this.authUrl + '/signup', userData);
  }

  login(userData: LOGIN_INTERFACE) {
    return this.http.post(this.authUrl + '/login', userData);
  }

  logout() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.userService.clear();
  }

  loggedIn(): boolean {
    return this.userService.userExist();
  }
}

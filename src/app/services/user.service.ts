import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { USER_INTERFACE } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userInfo!: USER_INTERFACE | undefined;

  constructor(private router: Router) { }


  setUser(user: USER_INTERFACE) {
    if (!this.userInfo) {
      return this.userInfo = user;
    }

    const { name, email, phone, category } = user;
    this.userInfo = { ...this.userInfo, name, email, phone, category }
    window.localStorage.setItem('user', JSON.stringify(this.userInfo))
    return this.userInfo;
  }

  user(): USER_INTERFACE {

    if (!this.userInfo) {

      const userData = window.localStorage.getItem('user');
      const user = JSON.parse(userData!);
      this.userInfo = user;


    }

    return { ...this.userInfo! };
  }

  userExist() {
    return !!this.userInfo
  }

  clear() {
    this.userInfo = undefined;
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  username!: string;
  email!: string;
  phone!: string;
  password!: string;
  category!: string;
  address!: string;

  loading = false;
  hasError = false;
  errorMsg = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isDisabled(): boolean {
    return (
      !this.username ||
      !this.email ||
      !this.phone ||
      !this.password ||
      !this.category ||
      this.loading
    );
  }

  signup() {
    if (this.isDisabled()) return;
    this.loading = true;
    const user = {
      name: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password,
      category: this.category,
      address: this.address,
    };

    this.authService.singup(user).subscribe(
      (result) => {
        console.log(result);
        this.loading = false;
      },
      (error: HttpErrorResponse) => {
        if (error.status == 400) {
          this.errorMsg = 'User email & phone already exist';
        } else {
          this.errorMsg = 'Something went wrong, pleas try again';
        }
        this.loading = false;
        this.hasError = true;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ourBlog';

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.me().subscribe(
      (result:any) => {
        this.userService.setUser(result.user)
        window.localStorage.setItem('token', `Bearer ${result.token}`)
      },
      error => {
        console.log(error)
      }
    )
  }


}

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../servicios/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    token: ''
  };
  res: object;


  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  login() {
    this.userService.login(this.user)
      .subscribe(res => {
          console.table(this.user);
          this.res = res;
          this.userService
            .setUser(res['user']);
          localStorage.setItem('token', res['token']);
          setTimeout(() => {
            this.router.navigate(['/movies']);
          }, 2500);
        },
        error => this.res = error.error);
  }

}

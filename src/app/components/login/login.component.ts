import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../servicios/user.service';
import {User} from '../../models/user.model';
import {log} from "util";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };
  res: object;
  texto: string;

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
          console.log('------------------', res);
          // @ts-ignore
          this.texto = res.text;
          this.res = res;
          this.userService
            .setUser(res['user']);
          if (res['token'] === undefined) {
            return;
          }
          localStorage.setItem('token', res['token']);
          setTimeout(() => {
            this.router.navigate(['/movies']);
          }, 2500);
        },
        error => console.table(error));
  }

}

import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../servicios/user.service';
import {Router} from '@angular/router';
import {Token} from '../../models/token.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };


  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  logOut() {
    this.userService.logOut()
      .subscribe(res => {
          console.log(res);
        },
        error => {
          console.table('------ error en logout.component-----------', error);
        });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/movies');
  }

}

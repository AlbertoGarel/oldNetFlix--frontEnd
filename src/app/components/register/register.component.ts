import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService) {
  }

  registrar() {
    this.userService.register(this.user)
      .subscribe(res => console.log(res));
  }
}

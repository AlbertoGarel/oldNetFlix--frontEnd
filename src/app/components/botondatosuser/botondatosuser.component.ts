import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servicios/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-datosuser',
  templateUrl: './botondatosuser.component.html',
  styleUrls: ['./botondatosuser.component.css']
})
export class BotondatosuserComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {

  }

}

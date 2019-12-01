import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servicios/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {


  }


}

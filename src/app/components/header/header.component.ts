import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servicios/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// existUser: boolean;

  constructor(
    private userService: UserService,
    // private router: Router
  ) {
  }

  ngOnInit() {
  }




}

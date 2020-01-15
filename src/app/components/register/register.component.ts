import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../servicios/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Route} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  texto: string;

  constructor(
    private userService: UserService,
    private _formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  registrar() {
    this.userService.register(this.user)
    // @ts-ignore
      .subscribe(res => this.texto = res.text);
    setTimeout(function() {
      this.router.navigate(['users/login']);
    });
  }


}

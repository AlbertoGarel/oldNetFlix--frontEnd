import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {Token} from '../models/token.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(
    private httpClient: HttpClient) {
  }

  // headers = { Authorization: this.user.token};

  register(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/user/register', user);
  }

  login(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }

  logOut(): Observable<any> {
    console.log('token en logout servicio', localStorage.getItem('token'));
    return this.httpClient.patch('http://localhost:3000/users/logout',
      {},
      {headers: {Authorization: 'bearer ' + localStorage.getItem('token')}});
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  // isInSesion() {
  //   console.log('%local', 'color:red', localStorage.getItem('user'))
  //   return localStorage.getItem('user');
  // }

  isInSesion() {
    console.log('service', localStorage.getItem('user'))
    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';


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
    return this.httpClient.post('http://localhost:3000/users/register', user);
  }

  login(user: User): Observable<object> {
    return this.httpClient.post('http://localhost:3000/users/login', user);
  }


  logOut(): Observable<any> {
    return this.httpClient.patch('http://localhost:3000/users/logout',
      {},
      {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
  }

  setUser(user: User): void {
    if (user === undefined) { return; }
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  isInSesion() {

    if (localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }

  getUserName() {
    console.log('-------------getUserName');
    const recup = localStorage.getItem('user');
    const trans = JSON.parse(recup);
    return trans.username;
  }

  getUserId() {
    console.log('-------------getUserId');
    const recup = localStorage.getItem('user');
    const trans = JSON.parse(recup);
    console.log('----------------------------------------------', trans);
    return trans._id;
  }

}

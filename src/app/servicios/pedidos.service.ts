import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  user: User;

  constructor( private httpClient: HttpClient) { }

  pedido(userId: string): Observable<object> {
    return this.httpClient.get(`http://localhost:3000/pedidos/${userId}`,
      {
        headers: {
          Authorization: 'bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      });
  }
}

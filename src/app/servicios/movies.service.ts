import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }
  getAllMovies():Observable<Object>{
    return this.httpClient.get('http://localhost:3000/movies');
  }
}

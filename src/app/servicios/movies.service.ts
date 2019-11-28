import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }


  getAllMovies(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/movies');
  }

  getAllGeneros(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/movies/generos/');
  }

  getPopulate(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/movies/estrenos`);
  }

  getGeneroByString(gender: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/movies/generos/${gender}`);
  }

  getTitleAndOverview(title: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/movies/titulos/${title}`);
  }
}

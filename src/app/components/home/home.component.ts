import {Component, OnInit} from '@angular/core';
import {MoviesService} from 'src/app/servicios/movies.service';
import {Movie} from 'src/app/models/movie.model';
import {Router} from '@angular/router';
import {UserService} from '../../servicios/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas: Array<Movie> = [];

  constructor(
    private movieService: MoviesService,
    // private router: Router,
    private userService: UserService
    ) {
  }

  ngOnInit() {
    this.userService.isInSesion();

    this.movieService.getAllMovies()
      .subscribe(
        // res => this.peliculas = res['results'],
        res => {
          // this.peliculas = res['results'];
          this.peliculas = res;
          console.log(res);
        },
        error => console.log(error)
      );
  }

}


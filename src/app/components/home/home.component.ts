import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../servicios/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas: Array<Movie>;

  constructor(private movieService: MoviesService) {

  }

  ngOnInit() {
    this.movieService.getAllMovies()
      .subscribe(
        res => this.peliculas = res['results'],
        error => console.log(error)
      )
  }

}

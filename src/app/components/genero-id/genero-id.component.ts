import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../servicios/movies.service';
import {Movie} from '../../models/movie.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-genero-id',
  templateUrl: './genero-id.component.html',
  styleUrls: ['./genero-id.component.css']
})
export class GeneroIdComponent implements OnInit {
  peliculas: Array<Movie> = [];

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gender = params.get('gender');
      gender.replace(/%20/gi, '');
      this.movieService.getGeneroByString(gender)
        .subscribe(movies => {
          this.peliculas = movies;
        });
    });
  }

}

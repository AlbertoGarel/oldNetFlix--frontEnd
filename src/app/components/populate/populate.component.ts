import {Component, inject, OnInit} from '@angular/core';
import {MoviesService} from '../../servicios/movies.service';
import {Movie} from '../../models/movie.model';


@Component({
  selector: 'app-populate',
  templateUrl: './populate.component.html',
  styleUrls: ['./populate.component.css']
})


export class PopulateComponent implements OnInit {
  peliculas: Array<Movie> = [];

  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {

    this.movieService.getPopulate()
      .subscribe(resp => {
          resp.map(item => {
            if (item.vote_average > 8.1) {
              this.peliculas = resp;
              console.log(item);
            } else {
              console.log('no entra');
            }
          });

        },
        error => console.log(error)
      );
  }

}

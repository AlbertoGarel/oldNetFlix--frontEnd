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
    // const populate = 'populate';
    // this.movieService.getPopulate(populate)
    //   .subscribe(resp => {
    //     // tslint:disable-next-line:only-arrow-functions
    //       resp.map(mayor => mayor.vote_average > 7);
    //       this.peliculas = resp;
    //       console.log(resp);
    //   },
    //     error => console.log(error)
    //     );
    this.movieService.getPopulate()
      .subscribe(resp => {
        this.peliculas = resp;
        console.log(resp);
      },
        error => console.log(error)
        );
  }

}

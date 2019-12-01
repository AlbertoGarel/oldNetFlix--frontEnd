import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../servicios/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  movie: Object;
  url = 'https://image.tmdb.org/t/p/w200/';
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.movieService.getMovieById(id)
        .subscribe(movie => {
          this.movie = movie;
        });
    });
  }


}

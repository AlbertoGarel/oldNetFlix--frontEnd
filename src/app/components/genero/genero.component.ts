import {Component, OnInit, Output} from '@angular/core';
import {MoviesService} from '../../servicios/movies.service';
import {Genero} from '../../models/genero.model';


@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
  exportAs: 'menuEnGeneros'
})

export class GeneroComponent implements OnInit {
@Output() generos: Array<Genero> = [];

  constructor(private movieService: MoviesService) { }


  ngOnInit() {
    this.movieService.getAllGeneros()
      .subscribe(
        res => {
          // this.generos = res['results'];
          this.generos = res;
          console.log(res);
        },
        error => console.log(error)
      );
  }


}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MoviesService} from '../../servicios/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../models/movie.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ModalbuscadorComponent} from '../modalbuscador/modalbuscador.component';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  peliculas: Array<Movie> = [];
  titleSearch: '';

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  getTitleAndOverview() {
    this.route.paramMap.subscribe(params => {
      const title = this.titleSearch;
      this.movieService.getTitleAndOverview(title)
        .subscribe(movies => {
          this.peliculas = movies;
          this.openDialog(this.peliculas);
        });
    });
  }

  openDialog(peliculas: any): void {
    this.peliculas = peliculas;
    this.dialog.open(ModalbuscadorComponent, {
      width: '90%',
      height: '90%',
      data: this.peliculas
    });
    console.log('modal', this.peliculas);
    // dialogRef.afterClosed().subscribe(res => {
    //   this.peliculas = res;
    // });
  }
}

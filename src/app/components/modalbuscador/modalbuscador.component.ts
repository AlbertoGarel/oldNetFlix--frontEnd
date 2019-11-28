import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ModalBuscador} from '../../modalbuscador';
import {Movie} from '../../models/movie.model';

@Component({
  selector: 'app-modalbuscador',
  templateUrl: './modalbuscador.component.html',
  styleUrls: ['./modalbuscador.component.css']
})
export class ModalbuscadorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalbuscadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalBuscador
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {UserService} from '../../servicios/user.service';
import {PedidosService} from '../../servicios/pedidos.service';
import {MoviesService} from '../../servicios/movies.service';

@Component({
  selector: 'app-datouser',
  templateUrl: './datouser.component.html',
  styleUrls: ['./datouser.component.css']
})
export class DatouserComponent implements OnInit {
  token = localStorage.getItem('token');
  userID = this.userService.getUserId();
  pedidoUser: object;
  datosPeli: object;

  constructor(
    private userService: UserService,
    private pedidosService: PedidosService,
    private movieServices: MoviesService
  ) {
  }

  ngOnInit() {
    this.pedidosService.pedido(this.userID)
      .subscribe(resp => {
          // @ts-ignore

          console.log(resp.movie_id);
          this.pedidoUser = resp;
          // @ts-ignore
          this.movieServices.getMovieById(resp.movie_id)
            .subscribe(tit => {
              this.datosPeli = tit;
            });
        },
        error => console.log(error)
      );

  }


}

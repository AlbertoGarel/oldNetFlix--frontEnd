import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../servicios/movies.service';
import {PedidosService} from '../../servicios/pedidos.service';
import {User} from '../../models/user.model';
import {UserService} from "../../servicios/user.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  token = localStorage.getItem('token');
  userID = this.userService.getUserId();
  // tslint:disable-next-line:ban-types
  movie: Object;
  url = 'https://image.tmdb.org/t/p/w200/';
  mensaje: string;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private pedidoService: PedidosService,
    private userService: UserService
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

  alquilar(userId: string) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.pedidoService.setPedido(this.userID, id)
        .subscribe(pedido => {
          this.mensaje = 'pedido realizado correctamente';
        },
          error => console.log(error)
          );
    });
  }

}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {GeneroComponent} from './components/genero/genero.component';
import {PopulateComponent} from './components/populate/populate.component';
import {GeneroIdComponent} from './components/genero-id/genero-id.component';
import {BuscadorComponent} from './components/buscador/buscador.component';
import {LoginComponent} from './components/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', component: HomeComponent},
  {path: 'movies/estrenos', component: PopulateComponent},
  {path: 'movies/generos', component: GeneroComponent},
  {path: 'movies/generos/:gender', component: GeneroIdComponent},
  {path: 'movies/titulos/:title', component: BuscadorComponent},
  {path: 'users/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule {
}

import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service'

@Component({
	selector    : 'peliculas',
	templateUrl : './peliculas.component.html',
	styleUrls   : ['./peliculas.component.css'],
  providers   : [PeliculaService]
})
export class PeliculasComponent implements OnInit {

  public titulo    : string;
  public peliculas : Pelicula[];
  public favorito  : Pelicula;
  public fecha     : any;

  constructor(
      private _peliculaService: PeliculaService
    ) {
    this.titulo    = "Peliculas";
    this.peliculas = this._peliculaService.getPeliculas();  
    this.fecha     = new Date(2020, 8, 12);
  }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void {
  	console.log('DoCheck Lanzado!!');
  }

  cambiarTitulo(){
  	this.titulo = "El Titulo a sido cambiado";
  }

  ngOnDestroy(){
  	console.log('EL COMPONENTE SE VA A ELIMINA!!');
  }

  mostrarFavoritos(event){
    this.favorito = event.pelicula;
  }

}

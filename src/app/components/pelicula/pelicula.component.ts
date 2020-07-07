import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({ 
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

	@Input() pelicula : Pelicula;
	@Input() contador;
	@Output() MarcarFavoritos = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(event, pelicula){
  	this.MarcarFavoritos.emit({
  		pelicula : pelicula
  	});
  }

}

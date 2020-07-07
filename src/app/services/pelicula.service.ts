import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
	public peliculas : Pelicula[];

	constructor(){
		this.peliculas = [
			new Pelicula("Spiderman 4",2019, "https://es.web.img2.acsta.net/pictures/17/06/19/14/01/130456.jpg"),
      new Pelicula("Los vengadores EndGame",2020, "https://lh3.googleusercontent.com/LuXJCZplZKwVigsjQCipK5qUUiyW8NBHqEtAeMByuYu-QqFHzq0gSULnS-Ict6V_Pvi0"),
      new Pelicula("Batman vs Superman2", 2016, "https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-113098552-large.jpg")
		];
	}

	holaMundo(){
		return "Hola desde el Servicio de Angular";
	}

	getPeliculas(){
		return this.peliculas;
	}
}
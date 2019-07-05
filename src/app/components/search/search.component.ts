import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../providers/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent{
  buscar: string = "";

  constructor(
    public serviceMovie: MovieService,
    public _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(parametros => {
      console.log(parametros);
      if (parametros["texto"]) {
        this.buscar = parametros["texto"];
        this.buscarPeliculas();
      }
    });
  }

  buscarPeliculas() {
    if (this.buscar.length == 0) {
      return;
    }
    this.serviceMovie.buscarPelicula(this.buscar).subscribe((data: any) => {
      // console.log(data.results);
      this.buscarPeliculas = data.results;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../providers/movie.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  buscar: string = "";

  constructor(public serviceMovie: MovieService) {}

  ngOnInit() {}

  buscarPelicula() {
    if (this.buscar.length == 0) {
      return;
    }
    this.serviceMovie.buscarPelicula(this.buscar).subscribe((data: any) => {
      console.log(data.results);
      // this.moviefind = data.results;
    });
  }
}

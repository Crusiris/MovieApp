import { Component } from "@angular/core";
import { MovieService } from "../../providers/movie.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  moviPopular: any[] = [];
  moviPopularKids: any[] = [];

  constructor(public serviceMovie: MovieService) {
    this.serviceMovie.getPopular().subscribe((data: any) => {
      console.log(data.results);
      this.moviPopular = data.results;
    });

    this.serviceMovie.getPopularesKids().subscribe((data: any) => {
      console.log(data.results);
      this.moviPopularKids = data.results;
    });
  }
}

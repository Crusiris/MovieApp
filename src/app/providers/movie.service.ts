import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"; // Map

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private apikey: string = "2d30c2fbc35f4c72501b77945421bbc9";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  //https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2d30c2fbc35f4c72501b77945421bbc9

  constructor(private httpc: HttpClient) {
    console.log("Servicio activo");
  }

  private getUrl(requets: string, language: string = "es"): string {
    return `${this.urlMoviedb}${requets}&api_key=${
      this.apikey
    }&language=${language}`;
  }

  getPopular() {
    const requets: string = "/discover/movie?sort_by=popularity.desc";
    const URL: string = this.getUrl(requets);
    console.log(URL);
    return this.httpc
      .jsonp(URL, "callback=JSONP_CALLBACK")
      .pipe(map(res => res));
  }

  getPopularesKids() {
    // /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    const request: string =
      "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
    const URL: string = this.getUrl(request);
    console.log(URL);
    return this.httpc
      .jsonp(URL, "callback=JSONP_CALLBACK")
      .pipe(map(res => res));
  }
}

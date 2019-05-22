import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"; // Map

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private apikey: string = "2d30c2fbc35f4c72501b77945421bbc9";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];

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

    return this.httpc
      .jsonp(URL, "callback=JSONP_CALLBACK")
      .pipe(map(res => res));
  }

  getPopularesKids() {
    // /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc
    const request: string =
      "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
    const URL: string = this.getUrl(request);

    return this.httpc
      .jsonp(URL, "callback=JSONP_CALLBACK")
      .pipe(map(res => res));
  }

  getCartelera() {
    // /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
    const hoy = new Date();
    const hasta = new Date();
    hasta.setDate(hoy.getDate() - 30); // 30 días atrás
    const txHoy =
      hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
    const txHasta =
      hasta.getFullYear() +
      "-" +
      (hasta.getMonth() + 1) +
      "-" +
      hasta.getDate();
    const request = `/discover/movie?primary_release_date.gte=${txHasta}&primary_release_date.lte=${txHoy}`;
    // console.log('hoy:', txHoy, ' hasta:', txHasta);
    const url = this.getUrl(request);
    return this.httpc
      .jsonp(url, "callback=JSONP_CALLBACK")
      .pipe(map(res => res));
  }

  buscarPelicula(texto: string) {
    const url = this.getUrl(
      `/search/movie?query=${texto}&sort_by=popularity.desc`
    );

    return this.httpc.jsonp(url, "callback=JSONP_CALLBACK").pipe(
      map((res: any) => {
        this.peliculas = res.results;
        console.log(res);
        return res.results;
      })
    );
  }
}

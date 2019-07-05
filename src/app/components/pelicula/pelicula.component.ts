import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../providers/movie.service';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  movie: any;
  regresarA: string = "";
  busqueda: string = "";

  constructor( public serviceMovie: MovieService,
    public _activatedRoute: ActivatedRoute) { 

      this._activatedRoute.params.subscribe(parametros => {
        console.log(parametros);
        this.regresarA = parametros['page'];
        console.log('page')
        if (parametros['busqueda']){
         this.busqueda = parametros['busqueda'];
        }

        this.serviceMovie.getmovie(parametros['id'])
           .subscribe( res => {
             this.movie = res;
             console.log(res);
           })
        
      })
    }

  ngOnInit() {
  }

}

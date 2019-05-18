import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Providers
// import { MovieService } from "./providers/movie.service";

//Router
import { APP_ROUTING } from "../app/app.routes";

//Components
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { PeliculaComponent } from './components/pelicula/pelicula.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, SearchComponent, PeliculaComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

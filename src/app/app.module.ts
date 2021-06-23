import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
/* export routes */
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';
/* Http */
import { HttpClientModule } from "@angular/common/http";
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NoimagePipe,
    DomseguroPipe,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

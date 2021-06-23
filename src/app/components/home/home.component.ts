import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor(private spoty: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spoty.getNewReleases()
      .subscribe((response: any) => {
        this.newSongs = response;
        this.loading = false;
      }, err => {
        this.error = true;
        this.loading = false;
        this.messageError = err.error.error.message;
      })
  }

}

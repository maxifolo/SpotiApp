import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;
  constructor(private router: ActivatedRoute, private spoty: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.spoty.getArtist(params['id']).subscribe(response => {
        console.log(response);
        this.artist = response;
        this.loading = false;
      })
      this.spoty.getTopTracks(params['id']).subscribe(response => {
        console.log(response);
        this.topTracks = response;
      })
    });
  }

}

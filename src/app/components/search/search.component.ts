import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  searchArtists: any[] = [];
  loading: boolean;
  constructor(private spity: SpotifyService) { }

  searchArtist(term: string) {
    console.log(term);
    this.loading = true;
    this.spity.getArtists(term).subscribe((data: any) => {
      this.searchArtists = data;
      this.loading = false;
    });
  }
}

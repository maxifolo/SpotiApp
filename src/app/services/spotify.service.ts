import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { strict } from 'assert';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': 'Bearer BQBoOJ7mYpbzvegkZ1JlPro17amsejTsLwQXS7-6IAX2ka5OAyb9UlMYRM-rkcZhhq1sBd3sheegrUZi5-Y' })
  };
  constructor(private http: HttpClient) {
    console.log("Service spotify listoooooo");
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, this.httpOptions);
  }
  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }
  getArtists(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }
  getArtist(artistId: string) {
    return this.getQuery(`artists/${artistId}`);
  }
  getTopTracks(artistId: string) {
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`)
      .pipe(map(data => {
        return data['tracks'];
      }));
  }
}

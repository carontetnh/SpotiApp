import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBN44Fw4uNWn9PmSsAC6U93uy3F26nXvcmAZ5KJ-ul7EAnFcgDaMn4UFDljkakqFNULgQivmnlfyQWLfpA'
    });

    return this._http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items) );
  }

  getArtists(parameter: string) {
    return this.getQuery(`search?q=${ parameter }&type=artist&limit=15`)
    .pipe( map( data => data['artists'].items) );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data['tracks']) );
  }
}

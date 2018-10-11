import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor(private _http: HttpClient ) {
    // console.log('Constructor del Home Hecho');
    // this._http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe( (data: any) => {
    //   this.paises = data;
    //   console.log(data);
    // });
  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private _spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this._spotifyService.getNewReleases()
    .subscribe( data => {
      this.newReleases = data;
      this.loading = false;
    }, ( serverError ) => {
      this.error = true;
      this.errorMessage = serverError.error.error.message;
      this.loading = false;
    });
  }

}

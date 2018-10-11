import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private _spotifyService: SpotifyService) {
    this.loading = false;
   }

  search(parameter: string) {
    this.loading = true;
    this._spotifyService.getArtists( parameter )
    .subscribe( data => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}

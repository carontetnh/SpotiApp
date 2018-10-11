import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor(private _activatedRouter: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this._activatedRouter.params.subscribe( params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }
  getArtist( id: string ) {
    this.loading = true;
    this._spotifyService.getArtist(id).subscribe(
      artist => {
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks( id: string ) {
    this._spotifyService.getTopTracks(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
        console.log(topTracks);
      }
    );
  }

}

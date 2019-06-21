import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService

  ) { }

  ngOnInit() {
    this.spotifyService.getCanciones().subscribe(data => {
      console.log(data);
    }) ;
  }

}

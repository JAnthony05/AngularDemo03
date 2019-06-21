
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface IListaCanciones{
  albums: any;
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient

  ) { }

  getCanciones() {

   return this.http.get<IListaCanciones>('https://api.spotify.com/v1/browse/new-releases', {
    headers: {
    'Authorization': 'Bearer BQDIOHBfbF1EiGsFLob0t5n1jzPmRSz2MfPLAYGss2-VFggxXXWNzT1i6tLl3ErwgVwLaUL7HKPj_Spkmz8'
    }
    });

    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { Album } from "../interfaces/album";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  //'22e5dcb7293a23da484afeacce80c247'
  private ATOKEN = '9417fbe8000e7d4b967deecc30524c8a';
  
  constructor(private http: HttpClient) { }

  getAlbum(genre) :Observable<Album[]>{
    const url:string = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${this.ATOKEN}&format=json`;
    return this.http.get<Album[]>(url,
      {
        headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'MyClientCert': '',        // This is empty
              'MyToken': ''              // This is empty
            }
          )
      }
    ).pipe( map(res => res), catchError(err => throwError(err)) );
  }
}

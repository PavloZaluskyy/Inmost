import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from "../interfaces/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private ATOKEN = '22e5dcb7293a23da484afeacce80c247'
  constructor(private http: HttpClient) { }

  getAlbum(genre) :Observable<Album[]>{
    const url:string = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=${this.ATOKEN}&format=json`;
    return this.http.get<Album[]>(url);
  }
}

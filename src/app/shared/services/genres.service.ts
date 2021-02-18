import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../interfaces/genres';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = './assets/dataGenres.json';
  constructor( private http: HttpClient ) { }

  getGenre(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.url);
  }
}

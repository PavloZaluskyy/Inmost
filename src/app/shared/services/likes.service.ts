import { Injectable } from '@angular/core';
import { Album } from "../interfaces/album";

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private yourFavoriteAlbums: Album[] = [];

  setAlbum(album:Album){
    if(!this.yourFavoriteAlbums.includes(album)){
      this.yourFavoriteAlbums.push(album);
      localStorage.setItem('yourFavoriteAlbums', JSON.stringify(this.yourFavoriteAlbums));
   } 
  }

  removeAlbum(album:Album){
    this.yourFavoriteAlbums = this.yourFavoriteAlbums.filter(elem => elem.name !== album.name || elem.artist['name'] !== album.artist['name']);
    localStorage.setItem('yourFavoriteAlbums', JSON.stringify(this.yourFavoriteAlbums));
  }

  getAlbums(){
    if (localStorage.getItem('yourFavoriteAlbums')){
      this.yourFavoriteAlbums =  JSON.parse(localStorage.getItem('yourFavoriteAlbums'));
      return this.yourFavoriteAlbums;
    }
    return [];
  }
  constructor() { }
}

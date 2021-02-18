import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/interfaces/album';
import { LikesService } from "../../shared/services/likes.service";

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  favoriteAlbums: Album[];
  changedLikeCounter: number;
  isEmpty:boolean = true;
  isInfoLike: boolean = false;
  isLike: boolean  = false;


  viewAlbums: any = false;
  dontFoundAlbums = false;
  searchEnter = '';

  setSearchMethod(event) {
    this.dontFoundAlbums = true;
    this.viewAlbums = [];
    if(event === ''){
      this.dontFoundAlbums = false; 
    }
    for (const key of this.favoriteAlbums){
      if (key.name.toLowerCase().search(event.toLowerCase().trim()) !== -1) {
        this.dontFoundAlbums = false;
        this.viewAlbums.push(key);
      } else {
        this.searchEnter = event;
      }
    } ;
  }

  onChanged(increased:any){
    setTimeout(()=>{
      this.favoriteAlbums = this.likesService.getAlbums(); 
    },1000);
    this.changedLikeCounter = this.likesService.getAlbums().length || 0; 
  }


  constructor(private likesService: LikesService) { }

  ngOnInit(): void {
    this.favoriteAlbums = this.likesService.getAlbums();
    this.isEmpty = false;
  }

}

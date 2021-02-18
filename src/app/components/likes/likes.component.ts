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

  onChanged(increased:any){
    setTimeout(()=>{
      this.favoriteAlbums = this.likesService.getAlbums(); 
    },1000);
    
    //this.changedLikeCounter = this.likesService.getAlbums().length; 
  }


  constructor(private likesService: LikesService) { }

  ngOnInit(): void {
    this.favoriteAlbums = this.likesService.getAlbums();
    this.isEmpty = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Album } from 'src/app/shared/interfaces/album';
import { AlbumService } from 'src/app/shared/services/album.service';
import { LikesService } from "../../shared/services/likes.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  genre:string;
  favoriteAlbums: Album[];
  
  viewAlbums: any = false;
  dontFoundAlbums = false;
  searchEnter = '';

  changedLikeCounter: number;
  isEmpty:boolean = true;
  albums: any[]
  constructor(
    private activateRoute: ActivatedRoute,  
    private albumService : AlbumService,
    private likesService: LikesService) {
    this.genre = activateRoute.snapshot.params['genre']; 
   }

   setSearchMethod(event) {
    this.dontFoundAlbums = true;
    this.viewAlbums = [];
    if(event === ''){
      this.dontFoundAlbums = false; 
    }
    for (const key of this.albums){
      if (key.name.toLowerCase().search(event.toLowerCase().trim()) !== -1) {
        this.dontFoundAlbums = false;
        this.viewAlbums.push(key);
      } else {
        this.searchEnter = event;
      }
    } 
    console.log(this.dontFoundAlbums);
    
  }

   onChanged(increased:any){
    this.changedLikeCounter = this.likesService.getAlbums().length; 
  }

  ngOnInit(): void {
    this.albumService.getAlbum(this.genre)
      .subscribe( data => {
        setTimeout(()=>{
          this.albums = data['albums'].album; 
          this.isEmpty = false;
        }, 1000)
        
      })

  }

}

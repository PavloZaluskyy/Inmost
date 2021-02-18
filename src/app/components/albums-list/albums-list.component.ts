import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlbumService } from 'src/app/shared/services/album.service';
@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {
  genre:string;
  isEmpty:boolean = true;
  albums: any[]
  constructor(private activateRoute: ActivatedRoute,  private albumService : AlbumService) {
    this.genre = activateRoute.snapshot.params['genre']; 
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

import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { LikesService } from "../../shared/services/likes.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: any;
  @Output() onChanged = new EventEmitter<boolean>();

  isInfoLike: boolean = false;
  isLike: boolean;
  constructor(private likesService: LikesService) { 
  }

  handleClick(){
    this.isInfoLike = true;
    if(!this.album.like) {
      console.log("added");
      this.album.like = true;
      this.isLike = true;
      this.likesService.setAlbum(this.album);
    } else {
      console.log("delete");
      this.album.like = false
      this.isLike = false;
      this.likesService.removeAlbum(this.album);
    }
    setTimeout( _ => this.isInfoLike = false, 3000)
    this.onChanged.emit(this.isLike);
  }
  ngOnInit(): void {
    this.isLike = this.album.like;
  }

}

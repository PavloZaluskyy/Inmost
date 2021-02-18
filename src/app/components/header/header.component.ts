import {Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { LikesService } from "../../shared/services/likes.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() changedLikeCounter:number = 0;
  @Output() searchText = new EventEmitter<string>();
  search: string;
  setSearchMethod(search) {
    this.searchText.emit(search);
  }

  constructor(private likesService: LikesService) { }



  ngOnInit(): void {
    this.changedLikeCounter = this.likesService.getAlbums().length; 
  }

}

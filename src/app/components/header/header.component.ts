import {Input, Component, OnInit } from '@angular/core';
import { LikesService } from "../../shared/services/likes.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() changedLikeCounter:number = 0;

  constructor(private likesService: LikesService) { }

  ngOnInit(): void {
    this.changedLikeCounter = this.likesService.getAlbums().length; 
  }

}

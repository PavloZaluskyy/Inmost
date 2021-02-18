import { Component, OnInit } from '@angular/core';

import { GenresService } from 'src/app/shared/services/genres.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.scss']
})
export class GenresListComponent implements OnInit {
 
  genres
  constructor( private genresService : GenresService ) { }

  ngOnInit(): void {
    this.genresService.getGenre()
      .subscribe(data => {
        this.genres = data
      })
  }

}

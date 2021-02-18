import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { ContentComponent } from './components/content/content.component';
import { AlbumComponent } from './components/album/album.component';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LikesComponent } from './components/likes/likes.component';

const appRoutes: Routes =[
  { path: '', component: GenresListComponent},
  { path: 'likes', component: LikesComponent},
  { path: 'album/:genre', component: AlbumsListComponent},
  { path: '**', component: NotFountComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFountComponent,
    ContentComponent,
    AlbumComponent,
    GenresListComponent,
    AlbumsListComponent,
    LoaderComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

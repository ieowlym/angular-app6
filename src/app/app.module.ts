import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadListComponent } from './read-list/read-list.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { ShortFilmComponent } from './short-film/short-film.component';
import { FeaturedFilmComponent } from './featured-film/featured-film.component';
import { ReadingsComponent } from './readings/readings.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadListComponent,
    WatchListComponent,
    ShortFilmComponent,
    FeaturedFilmComponent,
    ReadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

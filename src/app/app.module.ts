import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadListComponent } from './read-list/read-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

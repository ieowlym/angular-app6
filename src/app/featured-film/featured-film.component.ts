import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../services/data.service";
import { Feature } from "../classes/feature";

@Component({
  selector: 'app-featured-film',
  templateUrl: './featured-film.component.html',
  styleUrls: ['./featured-film.component.css']
})
export class FeaturedFilmComponent implements OnInit {
  @Input() dataService: any;

  ffList: Feature[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getFeaturedFilms(){
    this.ffList = this.dataService.getFeaturedFilms();
  }

}

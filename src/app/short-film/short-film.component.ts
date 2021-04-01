import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../services/data.service";
import { Short } from "../classes/short";

@Component({
  selector: 'app-short-film',
  templateUrl: './short-film.component.html',
  styleUrls: ['./short-film.component.css']
})
export class ShortFilmComponent implements OnInit {
  @Input() dataService: any;

  sfList: Short[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getShortFilms(){
    this.sfList = this.dataService.getShortFilms();
  }
}

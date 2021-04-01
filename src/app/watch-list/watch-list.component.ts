import { Component, OnInit } from '@angular/core';

import { DataService } from "../services/data.service";


@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ds = this.dataService

  ngOnInit(): void {
  }

}

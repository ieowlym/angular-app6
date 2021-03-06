import { Component, OnInit } from '@angular/core';

import { DataService } from "../services/data.service";
import { Reading } from "../classes/read";

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ds = this.dataService

  ngOnInit(): void {
  }

}

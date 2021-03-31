import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {
  dataService: DataService

  rList: Reading[];

  constructor(private dataService: DataService) {
    this.dataService = new DataService();
  }

  ngOnInit(): void {
  }

}

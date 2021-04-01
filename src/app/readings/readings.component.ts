import { Component, OnInit, Input } from '@angular/core';

import { DataService } from "../services/data.service";
import { Reading } from "../classes/read";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  @Input() dataService: any;

  rList: Reading[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getReadings() {
    this.rList = this.dataService.getReadings();

  }

}

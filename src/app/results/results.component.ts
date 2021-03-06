import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  location: any;
  combinedArray: any[] = [];

  constructor(private search: SearchService) { }

  ngOnInit() {
    this.location = this.search.getLocation();
  }

  onCombined(arrayData) {
    this.combinedArray = arrayData;
  }

}

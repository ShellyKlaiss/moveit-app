import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrls: ['./results-info.component.css']
})
export class ResultsInfoComponent implements OnInit {

  mogoLocations: any[] = [];


  constructor(private api: ApiService) {

  }

  ngOnInit() {
      this.api.getMogoLocations().then(data => {
      this.mogoLocations = data
    });
  }

}

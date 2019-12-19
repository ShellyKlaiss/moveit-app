import { Component, OnInit } from '@angular/core';
import { MogoService } from '../mogo.service';
import { QlineService } from '../qline.service';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrls: ['./results-info.component.css']
})
export class ResultsInfoComponent implements OnInit {

  mogoLocations: any[] = [];
  qlineLocations: any[] = [];
  combinedArrays: any[] = [];


  constructor(private mogo: MogoService, private qline: QlineService) {

  }

  ngOnInit() {
      this.mogo.getMogoLocations().then(data => {
      this.mogoLocations = data
    })

    this.qline.getQlineLocations().then(data => {
    this.qlineLocations = data
    })
  }

}

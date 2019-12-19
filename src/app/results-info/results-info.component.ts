import { Component, Input, OnChanges } from '@angular/core';
import { MogoService } from '../mogo.service';
import { QlineService } from '../qline.service';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrls: ['./results-info.component.css']
})
export class ResultsInfoComponent implements OnChanges  {

  @Input() combinedArray: any[];
  filteredData: any[];
  mogoShow: boolean = false;


  constructor(private mogo: MogoService, private qline: QlineService) {

  }

  ngOnChanges() {
    this.filteredData = this.combinedArray.slice(0, 5);

    if (this.filteredData.hasOwnProperty('docks')) {
      this.mogoShow = true;
    }
  }

}

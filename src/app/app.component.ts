import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var H: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moveIt-app';

  constructor(public router: Router, private http: HttpClient ) {

  }

  // mogoLocations: any[] = [];

  ngOnInit() {
    // let obs = this.http.get('https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/MoGo_Bike_Share_Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    // obs.subscribe((mogoLocations) => console.log('Got the response', mogoLocations));
  }
}



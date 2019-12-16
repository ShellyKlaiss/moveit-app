import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/MoGo_Bike_Share_Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
  mogoLocations: any[] = [];
  geometry: any;


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      for (let features in data)
      if (data.hasOwnProperty(features))
        this.mogoLocations.push(data[features])
        console.log('true');
    });
  }
}
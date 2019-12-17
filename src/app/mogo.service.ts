import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class MogoService {

  url = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/MoGo_Bike_Share_Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
  mogoLocations: any[] = [];


  constructor(private http: HttpClient) { }


  getMogoLocations() {
    return this.http.get(this.url).toPromise().then((data:any) => {
        this.mogoLocations = data.features;
        return this.mogoLocations;
  });
}
}

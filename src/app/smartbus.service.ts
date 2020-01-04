import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class SmartBusService {

    url = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/SMART_Bus_Stops/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
    smartBusLocations: any[] = [];


  constructor(private http: HttpClient) { }


  getSmartBusLocations() {
    return this.http.get(this.url).toPromise().then((data:any) => {
        this.smartBusLocations = data.features;
        return this.smartBusLocations;
  });
}
}
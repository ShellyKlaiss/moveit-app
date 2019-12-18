import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class QlineService {

    url = 'https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/QLine_Stops/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';
    qlineLocations: any[] = [];


  constructor(private http: HttpClient) { }


  getQlineLocations() {
    return this.http.get(this.url).toPromise().then((data:any) => {
        this.qlineLocations = data.features;
        return this.qlineLocations;
  });
}
}

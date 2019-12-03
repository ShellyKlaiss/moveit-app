import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // apikey: string = "30748527d5cb18fb40c29a614c16c1d1";
  // appid: string = "f525747a";
  apiUrl: string = "https://services2.arcgis.com/qvkbeam7Wirps6zC/arcgis/rest/services/MoGo_Bike_Share_Locations/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  constructor(private http: HttpClient) { }

  getData(options: SearchInterface) {
    
    // let searchUrl = this.apiUrl + `?q=${options.toggleLocation}?q=${options.customLocation}&app_id=${this.appid}&app_key=${this.apikey}&to=24`;

    
    // if (options.toggleLocation) {
    //   searchUrl += `&toggledLocation=${options.toggleLocation}`;
    // }

   
	  // if (options.customLocation) {
    //    searchUrl += `&customLocation=${options.customLocation}`;
	  // }

    // return this.http.get(searchUrl);
  }
}
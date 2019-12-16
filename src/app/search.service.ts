import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  location: any;


  constructor(private api: ApiService) { 
    console.log(this.api);
  }


  setLocation(location: any) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }
}

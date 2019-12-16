import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  location: any;


  constructor() { 

  }


  setLocation(location: any) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }
}

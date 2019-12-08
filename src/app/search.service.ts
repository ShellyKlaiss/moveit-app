import { Injectable } from '@angular/core';
import { SearchInterface } from './search-interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchInterface: SearchInterface;
  private searchResults: any[] = [];
  location: any;

  constructor(private api: ApiService) { }


  private handleResponse = (response: any): void => {
    for (let hit of response["hits"]) {
      this.searchResults.push(hit.recipe);
    }
  }

  setLocation(location: any) {
    this.location = location;
    console.log(this.location)
  }

  getLocation() {
    return this.location;
  }
}

import { Injectable } from '@angular/core';
import { SearchInterface } from './search-interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchInterface: SearchInterface; 
  private searchResults: any[] = []; 

  constructor(private api: ApiService) { }

  
  private handleResponse = (response: any): void => {
    for (let hit of response["hits"]) {
      this.searchResults.push(hit.recipe);
    }
  }
}

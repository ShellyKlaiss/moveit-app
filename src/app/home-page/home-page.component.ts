import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
  }

  searchOptions(form) {
    this.search.setOptions(form.value);

    this.router.navigate(["results"]);
  }

}
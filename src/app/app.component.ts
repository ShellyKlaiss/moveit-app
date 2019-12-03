import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var H: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moveIt-app';

  constructor(public router: Router){

  }
  
 

}


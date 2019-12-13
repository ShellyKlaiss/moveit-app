import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-info',
  templateUrl: './results-info.component.html',
  styleUrls: ['./results-info.component.css']
})
export class ResultsInfoComponent implements OnInit {


  locations = [
    { id: 1, name: 'Cass Ave & Gilmour Mall', docks: 15, lat: 42.3603014, lng: -83.06939720000001 },
    { id: 2, name: 'Cass Ave & W Hancock St', docks: 15, lat: 42.354775399999994, lng: -83.0662076 },
    { id: 3, name: 'Second Ave & Prentis St', docks: 15, lat: 42.35210099999999, lng: -83.0672128 },
    { id: 4, name: 'Second Ave & W Grand Blvd', docks: 19, lat: 42.368698299999984, lng: -83.07650190000001 },
    { id: 5, name: 'E Bethune St & Brush St', docks: 15, lat: 42.37407319999999, lng: -83.06995849999998 },
    { id: 6, name: 'Henry Ford Hospital', docks: 19, lat: 42.3666561, lng: -83.0839976 },
    { id: 7, name: 'Second Ave & Burroughs St', docks: 19, lat: 42.36411259999999, lng: -83.0741135 },
    { id: 8, name: 'WSU - W Kirby & Third Ave', docks: 15, lat: 42.3580684, lng: -83.07288229999999 },
    { id: 9, name: 'Trumbull Ave & Merrick St', docks: 19, lat: 42.35434176919598, lng: -83.0797193 },
    { id: 10, name: 'Kirby St & Woodward Ave', docks: 19, lat: 42.35963821236236, lng: -83.06680445708731 },
    { id: 11, name: 'WCCC - W Fort St', docks: 15, lat: 42.326909847853265, lng: -83.05581663300971 },
    { id: 12, name: 'Farnsworth St & John R St', docks: 19, lat: 42.35892659999999, lng: -83.0631066 },
    { id: 13, name: 'Second Ave & Selden St', docks: 15, lat: 42.3475276, lng: -83.0647032 },
    { id: 14, name: 'Mack Ave & John R St', docks: 19, lat: 42.3484068, lng: -83.0561618 },
    { id: 15, name: 'Wilkins St & Russell St', docks: 15, lat: 42.3491395, lng: -83.0428618 },
    { id: 16, name: 'Gratiot Ave & Russell St', docks: 19, lat: 42.34355169999999, lng: -83.03900590000002 },
    { id: 17, name: 'Agnes St & Parker St', docks: 15, lat: 42.3555038, lng: -82.996371 },
    { id: 18, name: 'Wight St & Mt Elliott', docks: 15, lat: 42.34146899999998, lng: -83.0090633 },
    { id: 19, name: 'E Lafayette St & Orleans St', docks: 19, lat: 42.3387965, lng: -83.03137920000002 },
    { id: 20, name: 'Beaubien St & E Lafayette St', docks: 19, lat: 42.3338596, lng: -83.04198470000001 },
    { id: 21, name: 'Brush St & Madison St', docks: 15, lat: 42.33758710000001, lng: -83.0456218 },
    { id: 22, name: 'Grand Circus Park - West', docks: 19, lat: 42.336191299999996, lng: -83.0505999 },
    { id: 23, name: 'Cobo Center - Washington Blvd & W Congress St', docks: 23, lat: 42.3285297, lng: -83.049172 },
    { id: 24, name: 'Rosa Parks Transit Center', docks: 15, lat: 42.33145249999999, lng: -83.0522404 },
    { id: 25, name: 'Bagley Ave & Plaza Dr', docks: 18, lat: 42.3329198, lng: -83.0568646 },
    { id: 26, name: 'Wabash St & Michigan Ave', docks: 15, lat: 42.3316825, lng: -83.0752484 },
    { id: 27, name: '20th St & Bagley Ave', docks: 15, lat: 42.32458749999999, lng: -83.08099909999999 },
    { id: 28, name: 'W Vernor Hwy & Scotten Ave', docks: 15, lat: 42.321128900000005, lng: -83.0934284 },
    { id: 29, name: 'DMC - John R St & E Canfield St', docks: 15, lat: 42.35355349999999, lng: -83.05913640000001 },
    { id: 30, name: 'W Willis St & Cass Ave', docks: 19, lat: 42.35031075304946, lng: -83.0639665613038 },
    { id: 31, name: 'Temple St & Second Ave', docks: 15, lat: 42.34097781469874, lng: -83.061003028738 },
    { id: 32, name: 'Woodward Ave & Peterboro St', docks: 15, lat: 42.34521121996554, lng: -83.05662544597786 },
    { id: 33, name: 'Jos Campau & Guoin St', docks: 15, lat: 42.33700203117708, lng: -83.01800756666567 },
    { id: 34, name: 'Atwater St & Orleans St', docks: 19, lat: 42.333193743395306, lng: -83.02628072854682 },
    { id: 35, name: 'Jefferson Ave & Beaubien St', docks: 15, lat: 42.33073009160956, lng: -83.04043359607388 },
    { id: 36, name: 'Ren Cen Plaza & Detroit Riverwalk', docks: 23, lat: 42.32833582682475, lng: -83.03767603649447 },
    { id: 37, name: 'Paradise Valley - Gratiot Ave & Randolph St', docks: 15, lat: 42.33603297391482, lng: -83.04602128938697 },
    { id: 38, name: 'Capitol Park - Griswold St & State St', docks: 11, lat: 42.33322545572709, lng: -83.04965482440755 },
    { id: 39, name: 'Monroe Ave & Campus Martius', docks: 27, lat: 42.33211562820729, lng: -83.04604478186724 },
    { id: 40, name: 'Larned St & Woodward Ave', docks: 15, lat: 42.3295349107905, lng: -83.04475687535385 },
    { id: 41, name: 'W Fort St & Griswold St', docks: 19, lat: 42.33075307073426, lng: -83.04709145561947 },
    { id: 42, name: 'Brooklyn St & Michigan Ave', docks: 15, lat: 42.33179313789183, lng: -83.06402668846204 },
    { id: 43, name: '23rd St & Bagley Ave', docks: 15, lat: 42.32317479374022, lng: -83.0847038445055 },
  ];

  constructor() { }

  ngOnInit() {
    
  }

}

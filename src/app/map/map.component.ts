import { Component, ViewChild, NgZone, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MogoService } from '../mogo.service';
import { QlineService } from '../qline.service';

declare let google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
};

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  marker?: Marker;
};


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {

  @Input() myLocation: any;
  @Output() combined = new EventEmitter<any[]>();

  geocoder: any;
  loading: boolean = true;
  public origin: any;
  public destination: any;
  public travelMode: string = 'WALKING';
  show: boolean;
  mogoLocations: any[] = [];
  qlineLocations : any[] = [];
  combinedArrays: any[] = [];
  geometry: any;



  // Current Location
  public location: Location = {
    lat: 42.331429,
    lng: -83.045753,
    marker: {
      lat: 42.331429,
      lng: -83.045753,
      draggable: true,
    },
    zoom: 16.5
  };


  // Mogo Marker Icon
  mogoIcon = {
    url: '../assets/images/moveItBike.png',
    scaledSize: {
      width: 30,
      height: 30,
    }
  };

  // Qline Marker Icon
  qlineIcon = {
    url: 'https://cdn0.iconfinder.com/data/icons/citycons/150/Citycons_train-512.png',
    scaledSize: {
      width: 30,
      height: 30,
    }
  };



  @ViewChild(AgmMap, { static: true }) map: AgmMap;



  constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper, private mogo: MogoService, private qline: QlineService) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  };



  ngOnInit() {
    this.updateOnMap()

    //Pushes Data from the Mogo API to our Map Component
    this.mogo.getMogoLocations().then(data => {
      this.mogoLocations = data;
      this.combinedArrays = [...this.combinedArrays, ...data];
    });

    //Pushes Data from the Qline API to our Map Component
    this.qline.getQlineLocations().then(data => {
      this.qlineLocations = data;
      this.combinedArrays = [...this.combinedArrays, ...data];
    });
  };


  findLocation(address) {
    if (!address) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          this.location.lat = latitude;
          this.location.lng = longitude;
          this.location.marker.lat = latitude;
          this.location.marker.lng = longitude;
          this.location.marker.draggable = true;
          this.loading = false;
        });
      }
    } else {
      if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
      this.geocoder.geocode({
        'address': address
      }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0].geometry.location) {
            this.location.lat = results[0].geometry.location.lat();
            this.location.lng = results[0].geometry.location.lng();
            this.location.marker.lat = results[0].geometry.location.lat();
            this.location.marker.lng = results[0].geometry.location.lng();
            this.location.marker.draggable = true;
            this.location.viewport = results[0].geometry.viewport;
          }
          this.loading = false;
          this.map.triggerResize()
        }
      })
    }
  };


  updateOnMap() {
    let currentLocation: string = ''
    if (this.myLocation) {
      currentLocation = this.myLocation.street
    }
    this.findLocation(currentLocation);
  };


  showDirection({ y: lat, x: lng }) {
    this.origin = {
      lat: this.location.lat,
      lng: this.location.lng
    }
    this.destination = {
      lat,
      lng,
    }
  };

  setPanel(){
    return document.querySelector('#myPanel'); 
  }

  closeLocation({ x, y }) {
    let closest = -1;
    for (let i = 0; i < this.combinedArrays.length; i++) {
      let radius = 3958.8; // Radius of the Earth in miles
      const rlat1 = this.location.marker.lat * (Math.PI / 180); // Convert degrees to radians
      const rlat2 = this.combinedArrays[i].geometry.y * (Math.PI / 180); // Convert degrees to radians
      const difflat = rlat2 - rlat1; // Radian difference (latitudes)
      const difflon = (this.combinedArrays[i].geometry.x - this.location.marker.lng) * (Math.PI / 180); // Radian difference (longitudes)

      const d = 2 * radius * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
      const miles = d.toFixed(3);

      console.log(miles);

      this.combinedArrays[i].distance = miles;
      if (closest == -1 || miles < this.combinedArrays[closest].distance) {
        closest = i;
      }
    }
    this.showDirection({ y, x});
    this.combinedArrays.sort((a, b) => (a.distance - b.distance));
    this.combined.emit(this.combinedArrays);


  }


  showWindow() {
    console.log('window open');
  }

}


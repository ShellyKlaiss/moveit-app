import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

declare let google:any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string; //street
  address_level_2?:string; //city
  address_zip?:string;
  address_state?:string;
  marker?: Marker;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']

})

export class MapComponent implements OnInit {
  geocoder:any;
  public location:Location = {
    lat:42.331429,
    lng: -83.045753,
    marker: {
      lat:42.331429,
      lng: -83.045753,
      draggable: true,
    },
    zoom: 12
  };

@ViewChild (AgmMap, {static: true}) map: AgmMap;

  constructor (public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) { 
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.location.marker.draggable = true;
  }

}

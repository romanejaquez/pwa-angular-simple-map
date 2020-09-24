import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPageComponent implements OnInit {

  map: google.maps.Map;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //zoomControl: false,
    scrollwheel: false,
    disableDefaultUI: true,
    disableDoubleClickZoom: true,
    zoom: 16,
    //styles: Utils.getDefaultMapStyles()
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        ...this.options,
        center: this.center
      });

      var markerStart = new google.maps.Marker({
        position: this.center,
        icon: {
          url: './assets/imgs/truck_pin.svg',
          anchor: new google.maps.Point(35,45)
        },
        map: this.map
      });
    });
  }

}

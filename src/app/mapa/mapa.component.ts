import { Component, OnInit } from '@angular/core';
import { MapsService} from './maps.service';

declare function initMapa(): any;

@Component({
  selector: 'app-map',
  templateUrl: './mapa.component.html',
  styleUrls: [ './mapa.component.css' ],
  
})


export class MapaComponent 
{
     
    lat: string = '';
    lng: string = '';

    location: Object;

    constructor(private map:MapsService)
    {

    }

    ngOnInit()
    {
      this.map.getLocation().suscribre(data => 
      {
        console.log(data);
        this.lat = data.latitude;
        this.lng = data.longitude;
      })
    }
}


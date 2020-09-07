import { Component, OnInit } from '@angular/core';
import * as mapa from './mapa.js';

@Component({
  selector: 'app-map',
  templateUrl: './mapa.component.html',
  styleUrls: [ './mapa.component.css' ]
})

export class MapaComponent implements OnInit
{
  ngOnInit() {
    mapa.initMap();    
  }

}


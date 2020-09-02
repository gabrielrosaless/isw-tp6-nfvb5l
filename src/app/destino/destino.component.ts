import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {

  constructor() { }
  calendar;
  
  ngOnInit() {
    this.calendar = false;
  }
  
  habilitar(){
    this.calendar = true;
    return;
  }
  deshabilitar(){
    this.calendar= false;
  }

}
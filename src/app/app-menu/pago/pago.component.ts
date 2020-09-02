import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  tarjeta: boolean;
  efectivo: boolean;
  FormEfectivo: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.efectivo = true;
    this.FormEfectivo = this.formBuilder.group({Abonado:[null, [Validators.required, Validators.pattern("[0-9]{1,7}")]],})
  }

  efectiv(){
    this.efectivo = true;
    this.tarjeta = false;
  }

  td(){
    this.tarjeta = true;
    this.efectivo= false;
  }

}
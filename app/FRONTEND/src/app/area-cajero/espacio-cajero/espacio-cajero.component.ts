import { Component } from '@angular/core';

@Component({
  selector: 'app-espacio-cajero',
  templateUrl: './espacio-cajero.component.html',
  styleUrls: ['./espacio-cajero.component.css']
})
export class EspacioCajeroComponent {
  getCaja(){
    let codigocaja = localStorage.getItem('codigocaja');
    return codigocaja;
  }
}

import { Component } from '@angular/core';
import { ServicioCarritoService } from '../../servicios/servicio-carrito.service';
import { Elemento } from '../../interfaces/elemento';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  lista: Elemento[];

  constructor(private carrito: ServicioCarritoService){
    carrito.carrito.subscribe((observable) => this.lista = observable); 
  }
}

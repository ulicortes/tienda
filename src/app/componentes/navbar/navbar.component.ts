import { Component } from '@angular/core';
import { ServicioCarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cant: number;
  constructor(private cantidad: ServicioCarritoService){
    cantidad.cantidad.subscribe((observable) => this.cant = observable);
  }
}

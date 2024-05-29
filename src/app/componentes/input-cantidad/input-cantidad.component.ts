import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Elemento } from '../../interfaces/elemento';
import { ServicioCarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-input-cantidad',
  templateUrl: './input-cantidad.component.html',
  styleUrl: './input-cantidad.component.scss'
})
export class InputCantidadComponent {
  carro: Elemento[] = [];

  @Input()
  elemento: Elemento;

  constructor(private carrito: ServicioCarritoService) {
    carrito.carrito.subscribe((observable) => this.carro = observable);
  }

  aumentar(e: Elemento) {
    if (e.cant_a_comprar < e.cant_disponible) e.cant_a_comprar++;
  }
  disminuir(e: Elemento) {
    if (e.cant_a_comprar > 0) e.cant_a_comprar--;
  }

  agregarAlCarrito(elemento: Elemento): void {
    if(elemento.cant_a_comprar <= elemento.cant_disponible) {
      this.carrito.agregar(elemento);
      elemento.cant_disponible -= elemento.cant_a_comprar;
      elemento.cant_a_comprar = 0;
    }
  }
}

import { Component, Input } from '@angular/core';
import { ServicioCarritoService } from '../../servicios/carrito.service';
import { Elemento } from '../../interfaces/elemento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  lista$: Observable<Elemento[]>;
  @Input()
  elemento: Elemento;
  cant: number;

  constructor(private carrito: ServicioCarritoService, private cantidad: ServicioCarritoService) {
    this.lista$ = carrito.carrito.asObservable();
    this.cantidad.cantidad.subscribe((observable) => this.cant = observable);  
  }

  aumentar(e: Elemento) {
    if (e.cant_a_comprar < e.cant_disponible) {
      this.carrito.sumarUno(e);
    }
  }
  disminuir(e: Elemento) {
    if (e.cant_a_comprar > 0 && this.cant > 0) {
      this.carrito.restarUno(e);
    }
  }

  agregarAlCarrito(elemento: Elemento): void {
    if(elemento.cant_a_comprar < elemento.cant_disponible) {
      this.carrito.agregar(elemento);
      elemento.cant_disponible -= elemento.cant_a_comprar;
      elemento.cant_a_comprar = 0;
    }
  }
  vaciarTodoElCarrito() {
    this.carrito.vaciarCarrito();
  }
}

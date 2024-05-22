import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elemento } from '../../interfaces/elemento';
import { ElementosService } from '../../servicios/elementos.service';
import { ServicioCarritoService } from '../../servicios/carrito.service';
import { ListaElementosComponent } from '../lista-elementos/lista-elementos.component';

@Component({
  selector: 'app-detalle-elemento',
  templateUrl: './detalle-elemento.component.html',
  styleUrl: './detalle-elemento.component.scss'
})
export class DetalleElementoComponent {
  id: number;
  carro: Elemento[] = [];

  @Input()
  elemento: Elemento;

  constructor(private carrito: ServicioCarritoService, private route: ActivatedRoute, private apiElementos: ElementosService) {
    carrito.carrito.subscribe((observable) => this.carro = observable);
  }

  // ngOnInit(): void {
  //   this.id = parseInt(this.route.snapshot.paramMap.get('id')!)-1;
  //   this.apiElementos.listaCompleta().subscribe(elem => this.elemento = elem[this.id]);
  // }

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

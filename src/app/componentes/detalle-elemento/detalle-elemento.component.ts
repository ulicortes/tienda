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

  @Input()
  elemento: Elemento;

}

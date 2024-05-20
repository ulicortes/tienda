import { Component, OnInit } from '@angular/core';
import { Elemento } from '../../interfaces/elemento';
import { ServicioCarritoService } from '../../servicios/carrito.service';
import { ElementosService } from '../../servicios/elementos.service';
import { log } from 'node:console';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.scss'
})
export class ListaElementosComponent implements OnInit {

  elementos: Elemento[] = [];
  carro: Elemento[] = [];
  mostrarDetalle: boolean = false;
  id: number = -1;

  constructor(private apiElementos: ElementosService, private carrito: ServicioCarritoService) {
    carrito.carrito.subscribe((observable) => this.carro = observable);
  }
  ngOnInit(): void {
    this.apiElementos.listaCompleta().subscribe(elems => {
      this.elementos = elems;
      this.elementos.map(e => {
        let cosa: Elemento = this.carro.find((obj) => obj.nombre == e.nombre)!;
        if (cosa) {
          e.cant_disponible -= cosa.cant_a_comprar;
        }
      })
    });
  }

  habilitarDetalle(identificador: number) {
    this.mostrarDetalle = true;
    this.id = identificador - 1;
  }
  deshabilitarDetalle() {
    this.mostrarDetalle = false;
  }

}

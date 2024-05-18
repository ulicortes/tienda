import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaElementosComponent } from '../lista-elementos/lista-elementos.component';
import { Elemento } from '../../interfaces/elemento';

@Component({
  selector: 'app-detalle-elemento',
  templateUrl: './detalle-elemento.component.html',
  styleUrl: './detalle-elemento.component.scss'
})
export class DetalleElementoComponent {
  id: number;
  equipo: Elemento;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.equipo = ListaElementosComponent.getElemento(this.id);
  }

}

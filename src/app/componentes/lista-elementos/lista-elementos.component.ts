import { Component } from '@angular/core';
import { Elemento } from '../../interfaces/elemento';
import { ServicioCarritoService } from '../../servicios/servicio-carrito.service';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.scss'
})
export class ListaElementosComponent {

  elementos: Elemento[] = [
    {
      nombre: "Los Angeles Lakers",
      imagen: "./assets/camisetas/lakers.jpg",
      precio: 98.73,
      cant_disponible: 7,
      descuento: 0.15,
      cant_a_comprar: 0,
      id: 1
    }, {
      nombre: "Golden State Warriors",
      imagen: "./assets/camisetas/warriors.jpg",
      precio: 56.98,
      cant_disponible: 13,
      descuento: 0.33,
      cant_a_comprar: 0,
      id: 2
    }, {
      nombre: "Boston Celtics",
      imagen: "NA",
      precio: 87.55,
      cant_disponible: 15,
      descuento: 0.51,
      cant_a_comprar: 0,
      id: 3
    }, {
      nombre: "Chicago Bulls",
      imagen: "SA",
      precio: 71.54,
      cant_disponible: 7,
      descuento: 0.21,
      cant_a_comprar: 0,
      id: 4
    }, {
      nombre: "Miami Heat",
      imagen: "NA",
      precio: 36.19,
      cant_disponible: 6,
      descuento: 0.51,
      cant_a_comprar: 0,
      id: 5
    }, {
      nombre: "Houston Rockets",
      imagen: "SA",
      precio: 96.95,
      cant_disponible: 2,
      descuento: 0.09,
      cant_a_comprar: 0,
      id: 6
    }, {
      nombre: "Toronto Raptors",
      imagen: "AS",
      precio: 49.65,
      cant_disponible: 18,
      descuento: 0.17,
      cant_a_comprar: 0,
      id: 7
    }, {
      nombre: "Dallas Mavericks",
      imagen: "AS",
      precio: 37.81,
      cant_disponible: 6,
      descuento: 0.06,
      cant_a_comprar: 0,
      id: 8
    }, {
      nombre: "Philadelphia 76ers",
      imagen: "SA",
      precio: 48.97,
      cant_disponible: 9,
      descuento: 0.48,
      cant_a_comprar: 0,
      id: 9
    }, {
      nombre: "Denver Nuggets",
      imagen: "AF",
      precio: 68.71,
      cant_disponible: 1,
      descuento: 0.5,
      cant_a_comprar: 0,
      id: 10
    }, {
      nombre: "Brooklyn Nets",
      imagen: "SA",
      precio: 68.4,
      cant_disponible: 6,
      descuento: 0.46,
      cant_a_comprar: 0,
      id: 11
    }, {
      nombre: "Portland Trail Blazers",
      imagen: "OC",
      precio: 74.13,
      cant_disponible: 9,
      descuento: 0.24,
      cant_a_comprar: 0,
      id: 12
    }, {
      nombre: "Utah Jazz",
      imagen: "NA",
      precio: 36.73,
      cant_disponible: 10,
      descuento: 0.05,
      cant_a_comprar: 0,
      id: 13
    }, {
      nombre: "Indiana Pacers",
      imagen: "OC",
      precio: 47.5,
      cant_disponible: 19,
      descuento: 0.31,
      cant_a_comprar: 0,
      id: 14
    }, {
      nombre: "Atlanta Hawks",
      imagen: "NA",
      precio: 44.58,
      cant_disponible: 16,
      descuento: 0.42,
      cant_a_comprar: 0,
      id: 15
    }, {
      nombre: "Detroit Pistons",
      imagen: "NA",
      precio: 77.35,
      cant_disponible: 17,
      descuento: 0.23,
      cant_a_comprar: 0,
      id: 16
    }, {
      nombre: "Memphis Grizzlies",
      imagen: "EU",
      precio: 46.15,
      cant_disponible: 16,
      descuento: 0.35,
      cant_a_comprar: 0,
      id: 17
    }, {
      nombre: "New York Knicks",
      imagen: "EU",
      precio: 39.99,
      cant_disponible: 14,
      descuento: 0.36,
      cant_a_comprar: 0,
      id: 18
    }, {
      nombre: "Phoenix Suns",
      imagen: "OC",
      precio: 45.39,
      cant_disponible: 13,
      descuento: 0.58,
      cant_a_comprar: 0,
      id: 19
    }, {
      nombre: "Sacramento Kings",
      imagen: "EU",
      precio: 88.83,
      cant_disponible: 20,
      descuento: 0.11,
      cant_a_comprar: 0,
      id: 20
    }, {
      nombre: "Oklahoma City Thunder",
      imagen: "NA",
      precio: 99.85,
      cant_disponible: 16,
      descuento: 0.3,
      cant_a_comprar: 0,
      id: 21
    }, {
      nombre: "Orlando Magic",
      imagen: "OC",
      precio: 85.19,
      cant_disponible: 12,
      descuento: 0.37,
      cant_a_comprar: 0,
      id: 22
    }, {
      nombre: "Charlotte Hornets",
      imagen: "NA",
      precio: 96.37,
      cant_disponible: 10,
      descuento: 0.09,
      cant_a_comprar: 0,
      id: 23
    }, {
      nombre: "Minnesota Timberwolves",
      imagen: "SA",
      precio: 71.63,
      cant_disponible: 3,
      descuento: 0.22,
      cant_a_comprar: 0,
      id: 24
    }, {
      nombre: "Washington Wizards",
      imagen: "AS",
      precio: 70.21,
      cant_disponible: 2,
      descuento: 0.15,
      cant_a_comprar: 0,
      id: 25
    }, {
      nombre: "New Orleans Pelicans",
      imagen: "NA",
      precio: 84.88,
      cant_disponible: 1,
      descuento: 0.37,
      cant_a_comprar: 0,
      id: 26
    }, {
      nombre: "Cleveland Cavaliers",
      imagen: "NA",
      precio: 64.33,
      cant_disponible: 6,
      descuento: 0.13,
      cant_a_comprar: 0,
      id: 27
    }, {
      nombre: "Milwaukee Bucks",
      imagen: "OC",
      precio: 55.93,
      cant_disponible: 10,
      descuento: 0.22,
      cant_a_comprar: 0,
      id: 28
    }, {
      nombre: "San Antonio Spurs",
      imagen: "EU",
      precio: 82.79,
      cant_disponible: 9,
      descuento: 0.41,
      cant_a_comprar: 0,
      id: 29
    }, {
      nombre: "LA Clippers",
      imagen: "NA",
      precio: 69.44,
      cant_disponible: 19,
      descuento: 0.4,
      cant_a_comprar: 0,
      id: 30
    }
  ];
  
  constructor(private carrito: ServicioCarritoService){
  }

  aumentar(e: Elemento) {
    if(e.cant_a_comprar < e.cant_disponible) e.cant_a_comprar++;
  }
  disminuir(e: Elemento) {
    if(e.cant_a_comprar>0) e.cant_a_comprar--;
  }

  agregarAlCarrito(elemento:Elemento): void{
    this.carrito.agregar(elemento);
    elemento.cant_disponible -= elemento.cant_a_comprar;
    elemento.cant_a_comprar = 0;
  }

  public getElemento(id:number) {
    return this.elementos[id]
  }
}

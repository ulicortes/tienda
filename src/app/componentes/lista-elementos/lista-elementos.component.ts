import { Component } from '@angular/core';
import { Elemento } from '../../interfaces/elemento';

@Component({
  selector: 'app-lista-elementos',
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.scss'
})
export class ListaElementosComponent {
  elementos: Elemento[] = [
    {
      "nombre": "Los Angeles Lakers",
      "imagen": "SA",
      "precio": 98.73,
      "cant_disponible": 7,
      "descuento": 0.15
    }, {
      "nombre": "Golden State Warriors",
      "imagen": "AS",
      "precio": 56.98,
      "cant_disponible": 13,
      "descuento": 0.33
    }, {
      "nombre": "Boston Celtics",
      "imagen": "NA",
      "precio": 87.55,
      "cant_disponible": 15,
      "descuento": 0.51
    }, {
      "nombre": "Chicago Bulls",
      "imagen": "SA",
      "precio": 71.54,
      "cant_disponible": 7,
      "descuento": 0.21
    }, {
      "nombre": "Miami Heat",
      "imagen": "NA",
      "precio": 36.19,
      "cant_disponible": 6,
      "descuento": 0.51
    }, {
      "nombre": "Houston Rockets",
      "imagen": "SA",
      "precio": 96.95,
      "cant_disponible": 2,
      "descuento": 0.09
    }, {
      "nombre": "Toronto Raptors",
      "imagen": "AS",
      "precio": 49.65,
      "cant_disponible": 18,
      "descuento": 0.17
    }, {
      "nombre": "Dallas Mavericks",
      "imagen": "AS",
      "precio": 37.81,
      "cant_disponible": 6,
      "descuento": 0.06
    }, {
      "nombre": "Philadelphia 76ers",
      "imagen": "SA",
      "precio": 48.97,
      "cant_disponible": 9,
      "descuento": 0.48
    }, {
      "nombre": "Denver Nuggets",
      "imagen": "AF",
      "precio": 68.71,
      "cant_disponible": 1,
      "descuento": 0.5
    }, {
      "nombre": "Brooklyn Nets",
      "imagen": "SA",
      "precio": 68.4,
      "cant_disponible": 6,
      "descuento": 0.46
    }, {
      "nombre": "Portland Trail Blazers",
      "imagen": "OC",
      "precio": 74.13,
      "cant_disponible": 9,
      "descuento": 0.24
    }, {
      "nombre": "Utah Jazz",
      "imagen": "NA",
      "precio": 36.73,
      "cant_disponible": 10,
      "descuento": 0.05
    }, {
      "nombre": "Indiana Pacers",
      "imagen": "OC",
      "precio": 47.5,
      "cant_disponible": 19,
      "descuento": 0.31
    }, {
      "nombre": "Atlanta Hawks",
      "imagen": "NA",
      "precio": 44.58,
      "cant_disponible": 16,
      "descuento": 0.42
    }, {
      "nombre": "Detroit Pistons",
      "imagen": "NA",
      "precio": 77.35,
      "cant_disponible": 17,
      "descuento": 0.23
    }, {
      "nombre": "Memphis Grizzlies",
      "imagen": "EU",
      "precio": 46.15,
      "cant_disponible": 16,
      "descuento": 0.35
    }, {
      "nombre": "New York Knicks",
      "imagen": "EU",
      "precio": 39.99,
      "cant_disponible": 14,
      "descuento": 0.36
    }, {
      "nombre": "Phoenix Suns",
      "imagen": "OC",
      "precio": 45.39,
      "cant_disponible": 13,
      "descuento": 0.58
    }, {
      "nombre": "Sacramento Kings",
      "imagen": "EU",
      "precio": 88.83,
      "cant_disponible": 20,
      "descuento": 0.11
    }, {
      "nombre": "Oklahoma City Thunder",
      "imagen": "NA",
      "precio": 99.85,
      "cant_disponible": 16,
      "descuento": 0.3
    }, {
      "nombre": "Orlando Magic",
      "imagen": "OC",
      "precio": 85.19,
      "cant_disponible": 12,
      "descuento": 0.37
    }, {
      "nombre": "Charlotte Hornets",
      "imagen": "NA",
      "precio": 96.37,
      "cant_disponible": 10,
      "descuento": 0.09
    }, {
      "nombre": "Minnesota Timberwolves",
      "imagen": "SA",
      "precio": 71.63,
      "cant_disponible": 3,
      "descuento": 0.22
    }, {
      "nombre": "Washington Wizards",
      "imagen": "AS",
      "precio": 70.21,
      "cant_disponible": 2,
      "descuento": 0.15
    }, {
      "nombre": "New Orleans Pelicans",
      "imagen": "NA",
      "precio": 84.88,
      "cant_disponible": 1,
      "descuento": 0.37
    }, {
      "nombre": "Cleveland Cavaliers",
      "imagen": "NA",
      "precio": 64.33,
      "cant_disponible": 6,
      "descuento": 0.13
    }, {
      "nombre": "Milwaukee Bucks",
      "imagen": "OC",
      "precio": 55.93,
      "cant_disponible": 10,
      "descuento": 0.22
    }, {
      "nombre": "San Antonio Spurs",
      "imagen": "EU",
      "precio": 82.79,
      "cant_disponible": 9,
      "descuento": 0.41
    }, {
      "nombre": "LA Clippers",
      "imagen": "NA",
      "precio": 69.44,
      "cant_disponible": 19,
      "descuento": 0.4
    }
  ];
}

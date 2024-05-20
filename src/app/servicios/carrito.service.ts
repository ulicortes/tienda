import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/elemento';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  private _carrito :Elemento[] = [];
  private _cantidad: number = 0;

  carrito: BehaviorSubject<Elemento[]> = new BehaviorSubject(this._carrito);
  cantidad: BehaviorSubject<number> = new BehaviorSubject(this._cantidad);
  constructor() { }

  agregar(elemento: Elemento) {
    console.log("ELEMENTO CANT_A_COMPRAR: "+elemento.cant_a_comprar);
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elemento.nombre)!;
    if(!cosa) {
      this._carrito.push({...elemento});
    } else {
      cosa.cant_a_comprar += elemento.cant_a_comprar;
    }
    this._cantidad += elemento.cant_a_comprar;
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
  }

  sumarUno(elem: Elemento) {
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elem.nombre)!;
    if(cosa) {
      cosa.cant_a_comprar ++;
    }
    this._cantidad ++;
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
  }

  restarUno(elem: Elemento) {
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elem.nombre)!;
    if(cosa) {
      cosa.cant_a_comprar--;
      if(cosa.cant_a_comprar == 0) {
        let index = this._carrito.indexOf(cosa);
        this._carrito.splice(index, 1);
      }
    }
    this._cantidad--;
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
  }
  
}

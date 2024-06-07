import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/elemento';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  private _carrito :Elemento[] = [];
  private _cantidad: number = 0;
  private _total: number = 0;

  carrito: BehaviorSubject<Elemento[]> = new BehaviorSubject(this._carrito);
  cantidad: BehaviorSubject<number> = new BehaviorSubject(this._cantidad);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  constructor() { }

  agregar(elemento: Elemento) {
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elemento.nombre)!;
    if(!cosa) {
      this._carrito.push({...elemento});
    } else {
      cosa.cant_a_comprar += elemento.cant_a_comprar;
    }
    this._cantidad += elemento.cant_a_comprar;
    this._total = parseFloat(( this._total + (elemento.precio * elemento.cant_a_comprar) ).toFixed(2));
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
    this.total.next(this._total);
  }

  sumarUno(elem: Elemento) {
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elem.nombre)!;
    if(cosa) {
      cosa.cant_a_comprar ++;
    }
    this._cantidad ++;
    this._total = parseFloat((this._total + elem.precio).toFixed(2));
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
    this.total.next(this._total);
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
    this._total = parseFloat((this._total - elem.precio).toFixed(2));
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
    this.total.next(this._total);
  }

  vaciarCarrito() {
    this._carrito.length = 0;
    this._cantidad = 0;
    this._total = 0;
    this.carrito.next(this._carrito);
    this.cantidad.next(this._cantidad);
    this.total.next(this._total);
  }
  
}

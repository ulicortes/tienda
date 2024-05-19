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

  
}

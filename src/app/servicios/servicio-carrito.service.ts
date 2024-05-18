import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/elemento';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  private _carrito :Elemento[] = [];

  carrito: BehaviorSubject<Elemento[]> = new BehaviorSubject(this._carrito);
  constructor() { }

  agregar(elemento: Elemento) {
    let cosa: Elemento = this._carrito.find((obj) => obj.nombre == elemento.nombre)!;
    if(!cosa) {
      this._carrito.push({...elemento});
    } else {
      cosa.cant_a_comprar += elemento.cant_a_comprar;
    }
    console.log(this._carrito);
    this.carrito.next(this._carrito);
  }

  
}

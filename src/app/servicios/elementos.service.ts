import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elemento } from '../interfaces/elemento';
import { Observable, tap } from 'rxjs';
const URL = "https://60c7daf7afc88600179f5c80.mockapi.io/elementos";

@Injectable({
  providedIn: 'root'
})
export class ElementosService {
  constructor(private http: HttpClient) { }
  
  public listaCompleta(): Observable<Elemento[]> {
    return this.http.get<Elemento[]>(URL)
    .pipe(
      tap((e1: Elemento[]) => e1.forEach(e2 => e2.cant_a_comprar = 0))
    );
  }

  public unElemento(id: string): Observable<Elemento> {
    console.log("ID: "+id);
    return this.http.get<Elemento>(`${URL}/${id}`)
      .pipe(
        tap((e1: Elemento) => {e1.cant_a_comprar = 0; console.log(e1)})
      );
  }
}

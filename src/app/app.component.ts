import { Component, OnInit } from '@angular/core';
import { ServicioCarritoService } from './servicios/carrito.service';
import { Elemento } from './interfaces/elemento';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tienda';
  

}

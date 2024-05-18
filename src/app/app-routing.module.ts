import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaElementosComponent } from './componentes/lista-elementos/lista-elementos.component';
import { DetalleElementoComponent } from './componentes/detalle-elemento/detalle-elemento.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: ListaElementosComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleElementoComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

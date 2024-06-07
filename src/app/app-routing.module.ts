import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaElementosComponent } from './componentes/lista-elementos/lista-elementos.component';
import { DetalleElementoComponent } from './componentes/detalle-elemento/detalle-elemento.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: ListaElementosComponent
  },
  {
    path: 'nosotros',
    component: SobreNosotrosComponent
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

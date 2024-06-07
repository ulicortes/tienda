import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaElementosComponent } from './componentes/lista-elementos/lista-elementos.component';
import { DetalleElementoComponent } from './componentes/detalle-elemento/detalle-elemento.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { InputCantidadComponent } from './componentes/input-cantidad/input-cantidad.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaElementosComponent,
    DetalleElementoComponent,
    CarritoComponent,
    InputCantidadComponent,
    NavbarComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

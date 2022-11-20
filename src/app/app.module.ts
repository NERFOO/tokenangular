import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetalleempleadoComponent } from './components/detalleempleado/detalleempleado.component';
import { appRoutingProviders, routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    DetalleempleadoComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpClientModule ,
    routing
  ],
  providers: [appRoutingProviders, UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

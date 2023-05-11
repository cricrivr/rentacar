import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroVehiculosComponent } from './components/registro-vehiculos/registro-vehiculos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FondoComponent } from './components/fondo/fondo.component';
import { ConsultarUsuarioComponent } from './components/consultar-usuario/consultar-usuario.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SUVComponent } from './components/suv/suv.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginUsuarioComponent,
    HomeComponent,
    NavComponent,
    RegistroUsuarioComponent,
    RegistroVehiculosComponent,
    FondoComponent,
    ConsultarUsuarioComponent,
    TipoComponent,
    VehiculosComponent,
    FooterComponent,
    SUVComponent,
    ProfileImageComponent,
    AlquilerComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

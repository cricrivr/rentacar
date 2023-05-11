import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { RegistroVehiculosComponent } from './components/registro-vehiculos/registro-vehiculos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { FondoComponent } from './components/fondo/fondo.component';
import { ConsultarUsuarioComponent } from './components/consultar-usuario/consultar-usuario.component';
import { TipoComponent } from './components/tipo/tipo.component';
import { ApiDbService } from './services/api-db.service';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { AlquilerComponent } from './components/alquiler/alquiler.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'registro', component: RegistroVehiculosComponent },
  { path: 'home', component: HomeComponent},
  { path: 'registrarse', component: RegistroUsuarioComponent },
  { path: 'vehiculos', component: VehiculosComponent},
  { path: 'fondo', component: FondoComponent},
  { path: 'consultar', component: ConsultarUsuarioComponent},
  { path: 'tipo', component: TipoComponent},
  { path: 'alquiler', component: AlquilerComponent},
  { path: 'prueba', component: PruebaComponent},
 
  { path: 'profile-image', component: ProfileImageComponent},

  { path: '**', redirectTo: 'login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

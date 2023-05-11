import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { usuarios } from 'src/app/classes/usuarios';
import { ApiDbService } from 'src/app/services/api-db.service';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent {
  
  listadoUsuario: Array<usuarios> = [];
  usuarioID: string = '';
  usuario: string = '';
  password: string = '';
  estado: boolean = true;
  nombre: string = '';

  constructor(private http: HttpClient, public servicios: ApiDbService){
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.servicios.getUsuarios().subscribe(resultado => { 
      this.listadoUsuario = resultado;
    })
  }


  guardarUsuario(){
    let objUsuario: usuarios = new usuarios();
    objUsuario.usuario = this.usuarioID;
    objUsuario.nombre = this.nombre;
    objUsuario.password = this.password;
    objUsuario.estado = this.estado;

  this.servicios.registrarUsuario(objUsuario).subscribe(resultado  => { 

    if (objUsuario !== null){
      objUsuario = new usuarios();
    }
    })
  }


}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { usuarios } from 'src/app/classes/usuarios';
import { ApiDbService } from 'src/app/services/api-db.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  listadoUsuario: Array<usuarios> = [];
  usuarioID: string = '';
  usuario: string = '';
  password: string = '';
  estado: boolean = true;
  nombre: string = '';
  msgRegistrado = false;

  usrId = 1;

  constructor(private http: HttpClient, public servicios: ApiDbService){
    this.obtenerUsuarios();
  }


  //obtener todos los usuarios dentro de la bd.
  obtenerUsuarios() {
    this.servicios.getUsuarios().subscribe(resultado => { 
      this.listadoUsuario = resultado;
    })
  }


  //obtener usuario según el id.
  obtenerUsuario(usuarioID: string) {
    this.servicios.getUsuarioID(usuarioID).subscribe(resultado => {
      console.log(resultado);
 
      if(resultado != null){ //si resultado es diferente de nulo, que me muestre los datos
        this.usuario = resultado.usuario;
        this.nombre = resultado.nombre;
        this.password = resultado.password;
        this.estado = resultado.estado;
      }  

    })
  }


  guardarUsuario(){
    let objUsuario: usuarios = new usuarios();
    objUsuario.usuario = this.usuarioID;
    objUsuario.nombre = this.nombre;
    objUsuario.password = this.password;
    objUsuario.estado = this.estado;

  this.servicios.registrarUsuario(objUsuario).subscribe(resultado  => { 
      console.log(resultado);
      this.usrId += 1;
      if(resultado = true){ //si resultado es true...
        this.limpiar(); //limpia los input
        this.msgRegistrado = true; //msgRegistrado será true y aparecerá
        this.obtenerUsuarios(); //llamar la funcion para que se actualice la tabla y aparezca el nuevo usuario

        //asignarle el tiempo al alert
        setTimeout(() => {
          this.msgRegistrado = false;
        }, 1000);

      }
     
    })
  }


  continuar(objUsuario: usuarios){
  
  }

  eliminar(usuario: string){
    this.servicios.eliminarUser(usuario).subscribe({
      next: response => {
        this.limpiar();
        console.log(response);
      }
    })
    }
  


  //funcion para seleccionar usuario en la tabla y llene los input
  seleccionarUsuario(objUsuario: usuarios) {
    this.usuarioID = objUsuario.usuario;
    this.nombre = objUsuario.nombre;
    this.password = objUsuario.password;
    this.estado = objUsuario.estado;

  }



  //funcion para limpiar los input
limpiar(){
  this.usuarioID = '';
  this.nombre = '';
  this.password = '';
  this.estado = false;

}
}



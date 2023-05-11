import { Component } from '@angular/core';
import { usuarios } from 'src/app/classes/usuarios';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent {


  listadoUsuario: Array<usuarios> = [];
  usuarioID: string = '';
  usuario: string = '';
  password: string = '';
  estado: boolean = true;
  nombre: string = '';

  
  constructor(private http: HttpClient){
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.http.post<Array<usuarios>>('http://127.0.0.1:8000/api/users', { }).subscribe(resultado => {
      this.listadoUsuario = resultado;

    })
  }

}

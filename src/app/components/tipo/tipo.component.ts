import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { tipo } from 'src/app/classes/tipo';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent {

  listadoTipos: Array<tipo> = [];
  idtipo: number = 0;
  tipo: string = '';
  msgRegisTipo:boolean = false;


  constructor(private http: HttpClient){
    this.buscarTipos();
  }

//obtener datos de la db
  buscarTipos(){
    this.http.post<Array<tipo>>('http://127.0.0.1:8000/api/buscarTipo', { }).subscribe(resultado =>{
      this.listadoTipos = resultado;

    })
  }


  selectTipo(objTipo: tipo) {
    this.idtipo = objTipo.idtipo;
    this.tipo = objTipo.tipo;
  }

  guardarTipo(){
    let objTipo: tipo = new tipo();
    objTipo.idtipo = this.idtipo;
    objTipo.tipo = this.tipo;

    this.http.post('http://127.0.0.1:8000/api/registrartipo', { 'datosTipo' : objTipo }).subscribe(resultado => {
      console.log(resultado);
      this.idtipo += 1;
      if(resultado = true){ //si resultado es true...
        this.limpiar(); //limpia los input
        this.buscarTipos(); //llama funcion para que actualizar tabla y se vean los nuevos registros

        //asignar tiempo del alert
        setTimeout(() => {
          this.msgRegisTipo = false;
        }, 1000);

      }
     
    })
  }


  buscaridtype(idtipo:number){
    this.http.post<tipo>('http://127.0.0.1:8000/api/buscaridtype', {'idtipo': idtipo}).subscribe(resultado =>{
      console.log(resultado);
      
      if(resultado != null){
        this.idtipo = resultado.idtipo;
        this.tipo = resultado.tipo;
      }
    })
  }

  limpiar(){
    this.idtipo = 0;
    this.tipo = '';
  }

}

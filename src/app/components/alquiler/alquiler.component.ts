import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { alquiler } from 'src/app/classes/alquiler';
import { vehiculos } from 'src/app/classes/vehiculos';
import { ApiDbService } from 'src/app/services/api-db.service';
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {

   idalquiler: number = 0;
   nombreUsuario: string = '';
   fecha:string = '';
   vehiculoid:number = 0;
   precio = 0;
   fechaIni:string = '';
   fechaFinal:string = '';
   dias: number = 0;
   estado:number = 0;
   entregado:number = 0;
   recibido:number = 0;
  total: number = 0;


listadoVehiculos: Array<vehiculos> = [];
listadoAlquiler: Array<alquiler> = [];

today = new Date();
format = 'yyyy/MM/dd';
myDate = '2019-06-29';
locale = 'en-US';
formattedDate = formatDate(this.today, this.format, this.locale);


  constructor(private http: HttpClient, public servicio: ApiDbService){
    this.buscarVehiculos();
    this.buscarAlquiler();
    servicio.getNombreUsuario().subscribe(nombre => {
      this.nombreUsuario = nombre;
    });
  }


  totalDias(){
    this.dias; 
  }

  //obtener todos los registros de vehiculos
  buscarVehiculos(){
    this.servicio.getTodosVehiculos().subscribe(resultado =>{
      this.listadoVehiculos = resultado;
  
    })
  }

  guardar(){
    let objAlquiler:alquiler = new alquiler();
    objAlquiler.idalquiler = this.idalquiler;
    objAlquiler.nombre_usuario = this.nombreUsuario;
    objAlquiler.fecha = this.fecha;
    objAlquiler.idvehiculo = this.vehiculoid;
    objAlquiler.precio = this.precio;
    objAlquiler.fechaIni = this.fechaIni;
    objAlquiler.fechaFinal = this.fechaFinal;
    objAlquiler.dias = this.dias;
    objAlquiler.total = this.total;

    this.servicio.saveAlquiler(objAlquiler).subscribe(resultado =>{
  if(resultado){
    this.limpiar();
    this.buscarAlquiler();
    
  }
  
    })
  }


  //obtener datos de alquiler
  buscarAlquiler(){
    this.servicio.getAlquiler().subscribe(resultado =>{
      this.listadoAlquiler = resultado;
    })
  }


  selectVehiculo(objVehiculo: vehiculos) {
    console.log(objVehiculo);
      
      if(this.vehiculoid !== null){
      this.vehiculoid = objVehiculo.vehiculoid;
      this.precio = objVehiculo.precio;
    }
    }

    //buscar vehiculo según se id
buscaridalquiler(vehiculoid:number){
  this.servicio.buscarAlquilerID(this.idalquiler).subscribe(resultado => {
   console.log(resultado);
 
   if(resultado !== null){

   }
   })
 }


 
    selectAlquiler(alquiler: alquiler){
      console.log(alquiler);

      if(this.idalquiler !== null){
        this.idalquiler = alquiler.idalquiler;
        this.nombreUsuario = alquiler.nombre_usuario;
        this.fecha = alquiler.fecha;
        this.vehiculoid = alquiler.idvehiculo;
        this.precio = alquiler.precio;
        this.fechaIni = alquiler.fechaIni;
        this.fechaFinal = alquiler.fechaFinal;
        this.estado = alquiler.estado;
        this.entregado = alquiler.entregado;
        this.recibido = alquiler.recibido;
        this.total = alquiler.total;
      }
    }

    limpiar(){
      this.idalquiler = 0;
      this.nombreUsuario = '';
      this.fecha =  '';
      this.vehiculoid = 0;
      this.precio = 0;
      this.fechaIni = '';
      this.fechaFinal ='';
      this.dias = 0;
      this.total = 0;
    }
}

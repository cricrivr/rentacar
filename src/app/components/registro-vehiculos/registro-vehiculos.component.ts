import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vehiculos } from 'src/app/classes/vehiculos';
import { tipo } from 'src/app/classes/tipo';
import { ApiDbService } from 'src/app/services/api-db.service';


@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent {
idtipo:number = 0;
vehiculoid:number = 0;
marca:string = '';
modelo:string = '';
fecha:number = 0;
tipo:string = '';
color:string = '';
combustible:string = '';
placa:string = '';
pasajeros:number = 0;
precio:number = 0;
estado:string = '';


msgMarca:boolean = false;
msgModelo:boolean = false;
msgColor:boolean = false;
msgPasajeros:boolean = false;
msgTipo:boolean = false;
msgRegistrado:boolean = false;

listadoVehiculos: Array<vehiculos> = [];
listadoTipos: Array<tipo> = [];
years: Array<number> = [];





constructor(private http: HttpClient, public servicio: ApiDbService) {
  this.buscarVehiculos(); //lo primero que lee al cargar la página
  this.buscarTipos();

  let time = new Date();
  for (let index = time.getFullYear(); index > 1899; index--) {
    this.years.push(index);
    
  }
}



//obtener datos de la db
buscarTipos(){
  this.http.post<Array<tipo>>('http://127.0.0.1:8000/api/buscarTipo', { }).subscribe(resultado =>{
    this.listadoTipos = resultado;

  })
}

//seleccionar registro para llenar campos
selectVehiculo(objVehiculo: vehiculos) {
console.log(objVehiculo);
  
  if(this.vehiculoid !== null){
  this.vehiculoid = objVehiculo.vehiculoid;
  this.marca = objVehiculo.marca;
  this.modelo = objVehiculo.modelo;
  this.fecha = objVehiculo.fecha;
  this.idtipo = objVehiculo.tipo;
  this.color = objVehiculo.color;
  this.combustible = objVehiculo.combustible;
  this.placa = objVehiculo.placa;
  this.pasajeros = objVehiculo.pasajeros;
  this.precio = objVehiculo.precio;
  this.estado = objVehiculo.estado;
}
}

//obtener datos de la bd. Esta con el servicio
buscarVehiculos(){
  this.servicio.getTodosVehiculos().subscribe(resultado =>{
    this.listadoVehiculos = resultado;

  })
}

//buscar vehiculo según se id
buscaridvehiculo(vehiculoid:number){
 this.servicio.buscarVehiculoID(vehiculoid).subscribe(resultado => {
  console.log(resultado);

  if(resultado != null){
    this.vehiculoid = resultado.vehiculoid;
    this.marca = resultado.marca;
    this.modelo = resultado.modelo;
    this.fecha = resultado.fecha;
    this.idtipo = resultado.tipo;
    this.color = resultado.color;
    this.combustible = resultado.combustible;
    this.placa = resultado.placa;
    this.pasajeros= resultado.pasajeros;
    this.precio = resultado.precio;
    this.estado= resultado.estado;

  }
  })
}


//mostrar mensajes
mensajes(){

this.msgMarca = false;
this.msgModelo = false;
this.msgColor = false;
this.msgPasajeros = false;
this.msgTipo = false;
this.msgRegistrado = false;
this.msgRegistrado = false;



  if(this.marca == ''){
    this.msgMarca = true;
  }

  if(this.modelo == ''){
    this.msgModelo = true;
  }

  if(this.color == ''){
    this.msgColor = true;
  }

  if(this.pasajeros == 0){
    this.msgPasajeros = true;
  }

  if(this.tipo == ''){
    this.msgTipo = true;
  }

  
}



//registrar o actualizar vehiculos
    guardar() {

      let objVehiculo: vehiculos = new vehiculos();
      objVehiculo.vehiculoid = this.vehiculoid;
      objVehiculo.marca = this.marca;
      objVehiculo.modelo = this.modelo;
      objVehiculo.fecha = this.fecha;
      objVehiculo.tipo = this.idtipo;
      objVehiculo.color = this.color;
      objVehiculo.combustible = this.combustible;
      objVehiculo.placa = this.placa;
      objVehiculo.pasajeros = this.pasajeros;
      objVehiculo.precio = this.precio;
      objVehiculo.estado = this.estado;

    this.servicio.registrarVehiculos(objVehiculo).subscribe(resultado => { 
      if (resultado){
        this.msgRegistrado = true;
         this.limpiar();  
         this.buscarVehiculos();

         setTimeout(() => {
          this.msgRegistrado = false;
        }, 2000);
    
    }
    
     }
     
     )}



     //funcion para limpiar inputs
     limpiar(){
      this.vehiculoid = 0;
      this.marca = '';
      this.modelo = '';
      this.fecha = 0;
      this.idtipo = 0;
      this.color = '';
      this.placa = '';
      this.combustible = '';
      this.pasajeros = 0;
      this.precio = 0;
      this.estado = '';
      
    } 

    
}


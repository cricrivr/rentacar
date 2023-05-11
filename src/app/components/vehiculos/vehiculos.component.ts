import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { vehiculos } from 'src/app/classes/vehiculos';
import { ApiDbService } from 'src/app/services/api-db.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent {


  constructor(private http: HttpClient, public servicio: ApiDbService){
    this.llenarCard();
  }

  listadoVehiculos: Array<vehiculos> = [];


  llenarCard(){
    this.servicio.getTodosVehiculos().subscribe(resultado =>{
      this.listadoVehiculos = resultado;
      console.log(this.listadoVehiculos);  
    });
  }

  
  }

  


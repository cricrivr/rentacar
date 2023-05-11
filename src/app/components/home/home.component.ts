import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDbService } from 'src/app/services/api-db.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nombreUsuario: string = '';


  constructor( private router: Router, public servicio: ApiDbService ) {
    console.log(this.servicio.token);
    servicio.getNombreUsuario().subscribe(nombre => {
      this.nombreUsuario = nombre;
      this.guardarLST();
    });
  }


  regresar () {
    this.router.navigate(['..']);
  }


  guardarLST(): void{
    this.servicio.saveData('iduser', '12334');
  }



  //obtener vehiculos por tipo
  obtenerSimilarM(){
    this.servicio.obtenerSimilarM().subscribe(resultado =>{
      this.router.navigate
    })
  }

  obtenerCoupe(){
    this.servicio.obtenerCoupe().subscribe(resultado =>{
      
    })
  }

  obtenerConvertible(){
    this.servicio.obtenerConvertible().subscribe(resultado =>{
      
    })
  }




}





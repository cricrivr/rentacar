import { HttpClient } from '@angular/common/http';
import { Component, ResolvedReflectiveFactory } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Router} from '@angular/router'; //importar router para poder usarlo en el navigate y redireccionar a home
import { ApiDbService } from 'src/app/services/api-db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //declara variable tipo boolean y asigna valor
  msgUsuario: boolean = false;
  msgPassword: boolean = false;
  msgCant:boolean  = false;
  accediendo: boolean = false; 
  msgIncorrecto:boolean = false;

  //declara variable y asigna tipo de dato (en este caso no se le asigna valor especifico)
  usuario: string = '';
  password: string = '';

  letrero: string = 'Acceder'; //variable que almacena lo que dice el botón inicialmente
  hayErrores: boolean = false;

  constructor(private http: HttpClient, private router:Router, public servicio: ApiDbService) { //inicializando variable y que sea global con el private: http, se crea router y se importa para poder usarlo en la redireccion a alguna page
  }

//funcion
    validarLogin() { //funcion  con los if


    if ( this.accediendo ) { //retornar
      return;
    }
    //variables ya declaradas y su valor
    this.msgPassword = false; //variables con msg son para mostrar un mensaje o alert, se declaran como falso inicialmente
    this.msgUsuario = false;
    this.msgCant = false;
    this.hayErrores = false;
   


    if ( this.usuario == ''){  //si el usuario esta vacio, msgUsuario será verdadero
      this.msgUsuario = true; 
      this.hayErrores = true;
    } 

    if ( this.password == '' ){
      this.msgPassword = true;
      this.hayErrores = true;
    }

    if ( this.password.length < 6){ //si la contraseña tiene menos de 6 caracteres, msgCant será verdadero
      this.msgCant = true;
      this.hayErrores = true;
    }

    if ( this.hayErrores  ) {
      return;
    }

 
    this.accediendo = true; 
    this.letrero = 'Accediendo..'; //cambia mensaje de botón al cargar

    this.http.post<any>('http://127.0.0.1:8000/api/login', { 'usuario': this.usuario, 'password' : this.password }).subscribe(retorno => {
        console.log('Retorno');
        console.log(retorno); //imprime retorno
        this.accediendo = false;
        this.letrero = 'Acceder'; //al terminar, vuelve a presentar acceder


        //redirect to home page with if condition
        if(retorno.resultado == true) { //si accediendo es falso, then... 
          this.router.navigate(['home']); //redireccionar a page home, 'home' es como esta en el path
          this.servicio.token = retorno.token;
          localStorage.setItem('token', retorno.token);
          
        } else {
          this.msgIncorrecto = true;      
          
          setTimeout(() => { //es una función nativa de JavaScript que configura un temporizador para ejecutar una función de devolución de llamada

            //la variable que hicimos (http) con metodo post (el que tenemos en nuestra api) y url de nuestra api
            //'usuario' es el nombre que le tenemos en la bdd. this.usuario es como está aquí
            //suscribe indica 
            this.msgIncorrecto = false;   
          }, 3000);    //para que tarde mas tiempo en cargar y de tiempo de programar
        }
    }); 

    
  


  }

 
}

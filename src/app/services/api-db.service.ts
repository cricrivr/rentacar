import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vehiculos } from '../classes/vehiculos';
import { usuarios } from '../classes/usuarios';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { alquiler } from '../classes/alquiler';

@Injectable({
  providedIn: 'root'
})
export class ApiDbService {


  server = 'http://127.0.0.1:8000';
  token = '';

  constructor(public http: HttpClient, private router: Router) { 
    let token = localStorage.getItem('token');
    if (token == null){
      token = '';
    }
    this.token = token;


    }

    canActive(route:ActivatedRouteSnapshot,
      state:RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{

        let status = false;
        
        return this.getValidacion().then(data => {
          if (data){
            return true;
          }else{
            return this.router.parseUrl('login');
          }
        });
      }



      async acceso(){
        return this.http.post<boolean>(this.server + 'validarToken', {token : this.token});
      }

 async getValidacion(){
  let valor:boolean = false;
  let valort = (await this.acceso()).toPromise().then(status =>{
    if ( valor == undefined){
      valor = false;
      return valor;
    }else{
      if(status == true){
        valor = true;
      }else{
        valor = false;
      }
      return valor;
    }
  });
  console.log(valort);
  return valort;
  
 }


 //ALQUILER

 //obtener todos los registros de alquiler
  getAlquiler(): Observable<Array<alquiler>> {
    return this.http.post<Array<alquiler>>(this.server + '/api/getAlquiler', {});
    
  }

  //guardar
  saveAlquiler(objAlquiler: alquiler): Observable<Array<alquiler>>{
    return this.http.post<Array<alquiler>>(this.server + '/api/saveAlquiler', {});

  }

  buscarAlquilerID(idalquiler: number): Observable<Array<alquiler>>{
    return this.http.post<Array<alquiler>>(this.server + '/api/obtenerID', {});

  }
    //VEHICULOS

    // mostrar/obtener vehiculos de la bdd. 
    getTodosVehiculos(): Observable<Array<vehiculos>> {
      return this.http.post<Array<vehiculos>>(this.server + '/api/buscarVehiculo', {});
    }

    //registrar vehiculos
    registrarVehiculos(objVehiculo: vehiculos ): Observable<boolean> {
      return  this.http.post<boolean>(this.server + '/api/registrarVehiculo', { 'datosVehiculo': objVehiculo});
    }

    //buscar vehiculo por id
    buscarVehiculoID(vehiculoid: number): Observable<vehiculos> {
      return  this.http.post<vehiculos>( this.server + '/api/buscarIdVehiculo', {'vehiculoid': vehiculoid});
    }


    //Eliminar usuario
    eliminarUser(usuario:string){
      return this.http.delete(this.server + 'eliminar/' + usuario, {})
    }


    //USUARIOS

    //obtener usuarios de la bd
    getUsuarios(): Observable<Array<usuarios>> {
      return this.http.post<Array<usuarios>>(this.server + '/api/users', { });
    }

    //mostrar usuario según el id
    getUsuarioID(usuarioID: string): Observable<usuarios> {
      return this.http.post<usuarios>(this.server + '/api/user/ID', { usuario : usuarioID });
    }


    //registrar usuario
    registrarUsuario(objUsuario: usuarios): Observable<boolean> {
      return this.http.post<boolean>(this.server + '/api/storedUser', { 'dataUsuario' : objUsuario });
    }
    

    //obtener nombre de usuario que entra (home)
    getNombreUsuario() {
      return this.http.post<string>(this.server + '/api/getNombre', { 'token' : this.token });
    }


    //LOCALSTORAGE
     saveData(key: string, value: string) {
      localStorage.setItem(key, value);
    }
  
     getData(key: string) {
      return localStorage.getItem(key)
    }
     removeData(key: string) {
      localStorage.removeItem(key);
    }
  

     //Obtener vehiculos por tipo
    obtenerSimilarM(): Observable<Array<vehiculos>>{
      return this.http.post<Array<vehiculos>>(this.server + '/api/similarmini', {});
    }
    
    obtenerCoupe(): Observable<Array<vehiculos>>{
      return this.http.post<Array<vehiculos>>(this.server + '/api/coupe-cars', {});
    }

    obtenerSportCar(): Observable<Array<vehiculos>>{
      return this.http.post<Array<vehiculos>>(this.server + '/api/sportCars', {});
    }

    obtenerConvertible(): Observable<Array<vehiculos>>{
      return this.http.post<Array<vehiculos>>(this.server + '/api/convertible', {});
    }
}




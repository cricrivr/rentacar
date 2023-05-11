export class alquiler {
    idalquiler: number;
    nombre_usuario: string;
    fecha:string;
    idvehiculo: number;
    precio: number;
    fechaIni:string;
    fechaFinal:string;
    dias: number;
    estado: number;
    entregado: number;
    recibido: number;
    total:number;


    constructor(){
        this.idalquiler = 0;
        this.nombre_usuario = '';
        this.fecha = '';
        this.idvehiculo = 0;
        this.precio = 0;
        this.fechaIni = '';
        this.fechaFinal = '';
        this.dias = 0;
        this.estado = 0;
        this.entregado = 0;
        this.recibido = 0;
        this.total = 0;
    }
}
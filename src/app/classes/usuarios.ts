export class usuarios { //exportar la clase
    usuario: string; //variable, tipo de dato
    nombre: string;
    password: string;
    estado: boolean;

    constructor() {
        this.usuario = ''; //variable, tipo de dato
        this.nombre = '';
        this.password = '';
        this.estado = true;
    }
}
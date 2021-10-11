//Habilitandopara que la clase sea exportada
export class Cliente{
    //Almacenar información
    _id?: number;
    nombre: string;
    apellido: string;
    correo:string;
    

    //Definir método contructor
    constructor(nombre: string, apellido:string, correo:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
    }
}
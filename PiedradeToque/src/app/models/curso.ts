//Habilitandopara que la clase sea exportada
export class Curso{
    //Almacenar información
    _id?: number;
    nombre: string;
    profesor: string;
    descripcion:string;
    precio:number;

    //Definir método contructor
    constructor(nombre:string, profesor:string, descripcion:string, precio:number){
        this.nombre = nombre;
        this.profesor = profesor;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
//Habilitando para que la clase sea exportada
export class Libro{
    //Almacenar información
    _id?: number;
    isbn: number;
    nombre: string;
    autor:string;
    precio:number;

    //Definir método contructor
    constructor(isbn: number, nombre:string, autor:string, precio:number) {
        this.isbn = isbn;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
}
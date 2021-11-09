//Habilitando para que la clase sea exportada
export class Libro{
    //Almacenar información
    _id?: number;
    isbn: number;
    nombre: string;
    autor:string;
    precio:number;
    image:string;

    //Definir método contructor
    constructor(isbn: number, nombre:string, autor:string, precio:number, image:string) {
        this.isbn = isbn;
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.image = image;
    }
}
import { Component, OnInit } from '@angular/core';
import {Libro} from 'src/app/models/libro';
import{LibroService} from 'src/app/services/libro.service';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  listadoLibros : Libro[] = [];

  constructor(private _libroService: LibroService) {
  }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(){
    this._libroService.getLibros().subscribe(data => {
      console.log(data);
      this.listadoLibros = data;

    },error => {
      console.log(error)
    })
  }

  eliminarLibro(id: any){
    Swal.fire({
      title: '¿Está seguro?',
      text: "No podrá recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000000',
      cancelButtonColor: '#727273',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.isConfirmed) {
        this._libroService.deleteLibro(id).subscribe(data => {
        Swal.fire(
          'Borrado',
          'El libro se ha eliminado con exito',
          'success'
        )
          this.obtenerLibros()
          
      },error => {
        console.log(error)
      })
      }
    })
  }
}

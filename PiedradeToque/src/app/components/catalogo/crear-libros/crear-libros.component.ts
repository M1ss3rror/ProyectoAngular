import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/services/libro.service';


@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibroComponent implements OnInit {

  libroForm: FormGroup;
  tituloForm = "Crear Libro";
  id: String | null;

  constructor(private fb: FormBuilder, private router: Router, private _libroService: LibroService, private idRoute: ActivatedRoute) {
    this.libroForm = this.fb.group({
      libroIsbn : ['',[Validators.required]],
      libroNombre : ['',[Validators.required]],
      libroAutor : ['',[Validators.required]],
      libroPrecio : ['',[Validators.required]]
    })
    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }

  agregarlibro(){
    console.warn(this.libroForm)
    //console.log(this.libroForm.get('libroIsbn')?.value);
    const libro: Libro ={
      isbn: this.libroForm.get('libroIsbn')?.value,
      nombre: this.libroForm.get('libroNombre')?.value,
      autor: this.libroForm.get('libroAutor')?.value,
      precio: this.libroForm.get('libroPrecio')?.value
    }
    console.log(libro)

    if (this.id !== null){
      this._libroService.putLibro(this.id,libro).subscribe(data => {
        this.router.navigate(['/listar-libros']);
      Swal.fire({
      icon: 'success',
      title: 'Libro actualizado con exito'
    })
    },error=> {
      console.log(error)
    })
    } else {
      this._libroService.postLibros(libro).subscribe(data => {
        this.router.navigate(['/listar-libros']);
        Swal.fire({
        icon: 'success',
        title: 'Libro guardado con exito'
      })
      },error=> {
        console.log(error)
      })
      
    }
  }

  accionSolicitada(){
    if (this.id !== null) {
      this.tituloForm= "Editar Libro";
      this._libroService.getLibro(this.id).subscribe(data => {
        this.libroForm.setValue({
          libroIsbn : data.isbn,
          libroNombre : data.nombre,
          libroAutor : data.autor,
          libroPrecio : data.precio
          })
      
      })
    }
  }
}
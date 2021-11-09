import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Libro } from 'src/app/models/libro';


@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {
  
  libroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.libroForm = this.fb.group({
      libroIsbn : ['',[Validators.required]],
      libroNombre : ['',[Validators.required]],
      libroAutor : ['',[Validators.required]],
      libroPrecio : ['',[Validators.required]],
      libroImage : ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  agregarLibro(){
    console.warn(this.libroForm)
    //console.log(this.libroForm.get('libroNombre')?.value);
    const LIBRO: Libro ={
      isbn: this.libroForm.get('libroIsbn')?.value,
      nombre: this.libroForm.get('libroNombre')?.value,
      autor: this.libroForm.get('libroAutor')?.value,
      precio: this.libroForm.get('libroPrecio')?.value,
      image: this.libroForm.get('libroImage')?.value
    }
    this.router.navigate(['/listar-libros'])
    Swal.fire({
      icon: 'success',
      title: 'Libro guardado con exito'
    })
  }

}

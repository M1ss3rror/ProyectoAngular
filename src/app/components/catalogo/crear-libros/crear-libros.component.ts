import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'

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
      libroPrecio : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  agregarLibro(){
    console.warn(this.libroForm)
    this.router.navigate(['/listar-libros'])
    Swal.fire({
      icon: 'success',
      title: 'Libro guardado con exito'
    })
  }

}

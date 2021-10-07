import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-libros',
  templateUrl: './crear-libros.component.html',
  styleUrls: ['./crear-libros.component.css']
})
export class CrearLibrosComponent implements OnInit {

  libroForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }

}

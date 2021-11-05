import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  cursoForm: FormGroup;
  tituloForm = "Crear Curso";
  id: String | null;

  constructor(private fb: FormBuilder, private router: Router, private _cursoService: CursoService, private idRoute: ActivatedRoute) {
    this.cursoForm = this.fb.group({
      cursoNombre : ['',[Validators.required]],
      cursoProfesor : ['',[Validators.required]],
      cursoDescripcion : ['',[Validators.required]],
      cursoPrecio : ['',[Validators.required]]
    })
    this.id = this.idRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }

  agregarcurso(){
    console.warn(this.cursoForm)
    //console.log(this.cursoForm.get('cursoNombre')?.value);
    const curso: Curso ={
      nombre: this.cursoForm.get('cursoNombre')?.value,
      profesor: this.cursoForm.get('cursoProfesor')?.value,
      descripcion: this.cursoForm.get('cursoDescripcion')?.value,
      precio: this.cursoForm.get('cursoPrecio')?.value
    }
    console.log(curso)

    if (this.id !== null){
      this._cursoService.putCurso(this.id,curso).subscribe(data => {
        this.router.navigate(['/listar-cursos']);
      Swal.fire({
      icon: 'success',
      title: 'Curso actualizado con exito'
    })
    },error=> {
      console.log(error)
    })
    } else {
      this._cursoService.postCursos(curso).subscribe(data => {
        this.router.navigate(['/listar-cursos']);
        Swal.fire({
        icon: 'success',
        title: 'Curso guardado con exito'
      })
      },error=> {
        console.log(error)
      })
      
    }
  }

  accionSolicitada(){
    if (this.id !== null) {
      this.tituloForm= "Editar Curso";
      this._cursoService.getCurso(this.id).subscribe(data => {
        this.cursoForm.setValue({
          cursoNombre : data.nombre,
          cursoProfesor : data.profesor,
          cursoDescripcion : data.descripcion,
          cursoPrecio : data.precio
          })
      
      })
    }
  }
}
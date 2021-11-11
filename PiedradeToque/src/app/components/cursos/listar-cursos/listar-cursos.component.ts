import { Component, OnInit } from '@angular/core';
import {Curso} from 'src/app/models/curso';
import{CursoService} from 'src/app/services/curso.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {

  listadoCursos : Curso[] = []

  constructor(private _cursoService: CursoService) { }

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this._cursoService.getCursos().subscribe(data => {
      console.log(data);
      this.listadoCursos = data;

    },error => {
      console.log(error)
    })
  }

  eliminarCurso(id: any){
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
        this._cursoService.deleteCurso(id).subscribe(data => {
        Swal.fire(
          'Borrado',
          'El curso se ha eliminado con éxito',
          'success'
        )
          this.obtenerCursos()
      },error => {
        console.log(error)
      })
      }
    })
  }
}

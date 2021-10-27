import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clienteForm = this.fb.group({
      clienteNombre : ['',[Validators.required]],
      clienteApellido : ['',[Validators.required]],
      clienteCorreo : ['',[Validators.required, Validators.pattern(this.emailPattern)]]
    })
  }

  ngOnInit(): void {
  }

  agregarCliente(){
    console.warn(this.clienteForm)
    this.router.navigate(['/'])
    Swal.fire({
      icon: 'success',
      title: 'Susctito con exito'
    })
  }
}

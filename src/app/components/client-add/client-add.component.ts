import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cliente } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {

  /*cliente: cliente = {
    clientId: 0,
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    address: ''
  }*/

  formulario: FormGroup = this.fb.group({
    id: 0,
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', Validators.required],
    address: ['', Validators.required]
  })

  constructor(private fb : FormBuilder) {}

  guardarCliente() {
    if(this.formulario.invalid) return;

    const clienteRegistrado : cliente = {
      clientId: this.formulario.controls['id'].value,
      firstName: this.formulario.controls['firstName'].value,
      lastName: this.formulario.controls['lastName'].value,
      dni: this.formulario.controls['dni'].value,
      email: this.formulario.controls['email'].value,
      address: this.formulario.controls['address'].value
    }

    console.log(clienteRegistrado);
  }
}

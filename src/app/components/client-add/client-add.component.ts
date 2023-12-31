import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cliente } from 'src/app/models/client.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {

  formulario: FormGroup = this.fb.group({
    id: 0,
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', Validators.required],
    address: ['', Validators.required]
  })

  clients : cliente[] = [];

  constructor(private fb : FormBuilder,
              private clientService : ClienteService) {}

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

    this.clientService.addCliente(clienteRegistrado);
    this.clientService.setShowTable(true);
    alert('Se ha registrado correctamente');
  }

}

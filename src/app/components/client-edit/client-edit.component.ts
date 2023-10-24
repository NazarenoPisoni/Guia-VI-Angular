import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cliente } from 'src/app/models/client.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent {

  cliente : cliente | undefined;

  formulario: FormGroup = this.fb.group({
    id: 0,
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', Validators.required],
    address: ['', Validators.required]
  })

  constructor(private fb : FormBuilder,
              private clienteService : ClienteService,
              private route : ActivatedRoute) {}

            

         

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

  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
              private route : ActivatedRoute,
              private router : Router) {}

  ngOnInit() {
    const clienteId = +this.route.snapshot.params['id'];
    this.clienteService.getSelectedClient().subscribe((cliente) => {
      if(cliente) {
        this.cliente = cliente;
        this.formulario.patchValue(this.cliente);
      }
    })

    this.clienteService.getClientePorId(clienteId);
  }          

         

  editarCliente() {
    if(this.formulario.valid && this.cliente) {
      this.cliente.firstName = this.formulario.value.firstName;
      this.cliente.lastName = this.formulario.value.lastName;
      this.cliente.dni = this.formulario.value.dni;
      this.cliente.email = this.formulario.value.email;
      this.cliente.address = this.formulario.value.address;

      this.clienteService.editarCliente(this.cliente);

      this.router.navigate(['/home']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { cliente } from 'src/app/models/client.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  clients : cliente[] = [];
  
  constructor(private clientService : ClienteService) {}

  ngOnInit() {
    if(this.clientService.showTable){
      this.clients = this.clientService.getClienteRegistrado();
    }
    
  }

  deleteClient(cliente : cliente) {
    this.clients.splice(this.clients.indexOf(cliente), 1);
  }

}

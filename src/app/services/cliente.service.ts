import { Injectable } from '@angular/core';
import { cliente } from '../models/client.model';
import { Router } from '@angular/router';
import cli from '@angular/cli';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes : cliente[] = [];

  private idActual = 0;

  showTable : boolean = false;

  constructor() { }

  getClienteRegistrado() : cliente[] {
    return this.clientes;
  }

  addCliente(client : cliente) : void {
    this.idActual++;
    client.clientId = this.idActual;
    this.clientes.push(client);
  }

  setShowTable(value : boolean) : void {
    this.showTable = value;
  }
}

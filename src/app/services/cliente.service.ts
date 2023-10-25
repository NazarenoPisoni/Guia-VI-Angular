import { Injectable } from '@angular/core';
import { cliente } from '../models/client.model';
import { Router } from '@angular/router';
import cli from '@angular/cli';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes : cliente[] = [];

  private idActual = 0;

  showTable : boolean = false;

  private selectedClientSubject = new BehaviorSubject<cliente | undefined>(undefined);

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

  getSelectedClient(): Observable<cliente | undefined> {
    return this.selectedClientSubject.asObservable();
  }

  getClientePorId(id : number) {
    const cliente = this.clientes.find((c) => c.clientId === id);
    this.selectedClientSubject.next(cliente);
  }

  editarCliente(clienteEditado : cliente) {
    const index = this.clientes.findIndex(
      (cliente) => cliente.clientId === clienteEditado.clientId);

    if(index !== -1) {
      this.clientes[index] = clienteEditado;
    }  
  }
}

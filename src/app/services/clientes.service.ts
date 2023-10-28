import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Clientes[] = [];

  agregarCliente(cliente: Clientes) {
    // Agrega el cliente a la lista de clientes
    this.clientes.push(cliente);
  }

  obtenerClientes() {
    // Retorna la lista de clientes
    return this.clientes;
  }
  
}
export interface Clientes {
  id: number;
  nombre: string;
  apellido: string;
  numero: string;
  correo: string;
  sexo: string;
}


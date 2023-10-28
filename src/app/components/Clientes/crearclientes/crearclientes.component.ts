import { Component } from '@angular/core';

@Component({
  selector: 'app-crearclientes',
  templateUrl: './crearclientes.component.html',
  styleUrls: ['./crearclientes.component.css']
})
export class CrearclientesComponent {
nombre: any;
apellido: string = '';
  numero: string = '';
  correo: string = '';
  sexo: string = 'M, F, O';

  agregarCliente() {
    // Lógica para agregar el cliente, puedes enviar los datos al servidor aquí
  }

}

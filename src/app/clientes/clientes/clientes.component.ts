import { Component } from '@angular/core';

import { Clientes } from '../model/clientes';


@Component({
  selector: 'app-clientes',
  standalone: false,

  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {

  clientes: Clientes[] = [
    { _id: '1', name: 'Silvia', category: 'Endividado'},
    { _id: '2', name: 'Sergio', category: 'Limpo'}
  ];
  displayedColumns = ['id', 'name', 'category'];

  constructor(){
  }

}

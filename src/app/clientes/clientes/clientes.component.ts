import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/clientes';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-clientes',
  standalone : false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})

export class ClientesComponent implements OnInit {

  clientes: Clientes[] = [];

  // clientesService: ClientesService;

  displayedColumns = ['id', 'name', 'category'];

  constructor(private clientesService: ClientesService ){
    // this.clientesService = new ClientesService();
     this.clientes = this.clientesService.list();
    }

  ngOnInit(): void {
  }

}

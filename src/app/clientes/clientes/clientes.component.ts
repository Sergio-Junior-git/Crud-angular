import { catchError, Observable, of } from 'rxjs';
import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/clientes';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clientes',
  standalone : false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss',
})

export class ClientesComponent implements OnInit {

  clientes$: Observable<Clientes[]>;

  // clientesService: ClientesService;

  displayedColumns = ['id', 'name', 'category'];

  constructor(private clientesService: ClientesService ){
    this.clientes$ = this.clientesService.list()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );



    // this.clientesService = new ClientesService();
    // this.clientes = this.clientesService.list()
    }

  ngOnInit(): void {
  }

}

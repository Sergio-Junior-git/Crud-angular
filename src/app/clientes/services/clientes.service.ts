import { Injectable } from '@angular/core';

import { Clientes } from '../model/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  list(): Clientes[] {
    return [
      {id: 1, name: 'Silvia', category: 'Limpo'},
      {id: 2, name: 'Sergio', category: 'Endividado'}
    ];
  }
}

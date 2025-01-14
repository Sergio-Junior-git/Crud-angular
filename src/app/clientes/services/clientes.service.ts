import { Injectable } from '@angular/core';

import { Clientes } from '../model/clientes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly apiUrl='http://localhost:3000/clientes';

  constructor(public httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Clientes[]>(this.apiUrl)
    .pipe(
      tap(clientes => console.log(clientes))
    );
  }

}

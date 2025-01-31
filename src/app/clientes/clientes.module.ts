import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    ClientesComponent,
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbar,
    MatProgressSpinnerModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,

  ]
})
export class ClientesModule { }

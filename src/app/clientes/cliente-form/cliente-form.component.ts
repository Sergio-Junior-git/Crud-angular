import { Location } from '@angular/common';
import { ClientesService } from './../services/clientes.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  standalone: false,

  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent implements OnInit {
  private snackBar = inject(MatSnackBar);

  form: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private service: ClientesService
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]

    })
  };

  ngOnInit(): void {

  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSucess());
  }

  onCancel(){

  }

  private onSucess(){
    this.snackBar.open('Cliente salvo com sucesso!', '', {duration:5000});
  }

}

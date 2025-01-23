import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: false,

  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss'
})
export class ClienteFormComponent implements OnInit {

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
    this.service.save(this.form.value).subscribe(result => console.log(result));
  }

  onCancel(){
    console.log('cancelou')
  }
}

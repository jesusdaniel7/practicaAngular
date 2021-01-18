import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { credencialesUsuario } from '../seguridad';

@Component({
  selector: 'app-seguridad-form',
  templateUrl: './seguridad-form.component.html',
  styleUrls: ['./seguridad-form.component.css'],
})
export class SeguridadFormComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}

  @Input() error;
  @Output()
  OnSubmit: EventEmitter<credencialesUsuario> = new EventEmitter<credencialesUsuario>();

  @Input() evento: string;

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      password: [
        '',
        {
          Validators: [Validators.required],
        },
      ],
    });
  }

  Savechanges() {
    this.OnSubmit.emit(this.form.value);
  }
}

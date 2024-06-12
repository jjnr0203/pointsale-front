import { Component, ViewEncapsulation, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;

}

get buildForm(): FormGroup {
  return (this.form = this.formBuilder.group({
    password: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  }))
}

validateForm() {
  if (this.form.valid) {
    alert('valido');
  } else {
    alert('No valido');
  }
}


get passwordField(): AbstractControl {
  return this.form.controls['password'];
}

get emailField(): AbstractControl {
  return this.form.controls['email'];
}

}


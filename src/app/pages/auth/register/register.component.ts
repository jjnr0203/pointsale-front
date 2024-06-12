import { Component, ViewEncapsulation, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register.component',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class RegisterComponent {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]]
    });
  }



  validateForm() {
    if (this.form.valid) {
      alert('El formulario es valido')
    } else {
      alert('El formulario no es valido');
    }
  }


  

  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;

  constructor() {
    this.form = this.buildForm;

}

get buildForm(): FormGroup {
  return (this.form = this.formBuilder.group({
    password: [null, [Validators.required, Validators.minLength(5)]],
    user: [null, [Validators.required]],
   


  }))
}

validateForm() {
  if (this.form.valid) {
    alert('valido');
  } else {
    alert('No valido');
  }
}

}


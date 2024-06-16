import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
/* import { LoginHttpService } from '../../../http-services/login-http.service';
 */import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;

  constructor(
/*     private loginHttpService: LoginHttpService,
 */    protected router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.buildForm;
  }

  get buildForm(): FormGroup {
    return (this.form = this.formBuilder.group({
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    }));
  }

  validateForm() {
    if (this.form.valid) {
      alert('valido');
    } else {
      alert('No valido');
    }
  }

  submitLogin() {
    /* this.form.markAllAsTouched();
    if (this.form.valid) {
      const data = this.form.value;
      this.loginHttpService.login(data).subscribe({
        next: () => {
          this.router.navigateByUrl('/core/super-admin/admin-list');
          this.getProfile();
        }}
      );
    } */
  }

  getProfile() {
/*     this.loginHttpService.getProfile().subscribe();
 */  }

  /* onSubmit() {
  if (this.form.valid) {
    const data = this.form.value;
    this.createAdmin(data);
    this.form.reset();
  } else {
    alert('El formulario no es valido');
  }
} */

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
}

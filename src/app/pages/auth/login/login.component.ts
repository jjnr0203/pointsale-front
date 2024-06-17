import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginHttpService } from '../../../http-services/login-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../../http-services/shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);
  protected form: FormGroup;

  user:any
  shop:any
  constructor(
    private loginHttpService: LoginHttpService,
    private shopService:ShopService,
    protected router: Router,
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
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const data = this.form.value;
      this.loginHttpService.login(data).subscribe({
        next: () => {
          this.router.navigateByUrl('/core/super-admin/admin-list');
          this.getUser()
        },
      });
    }
  }



  getUser() {
    this.user = this.loginHttpService.getUser();
  }
 
 

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
}

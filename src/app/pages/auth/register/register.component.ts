import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CataloguesHttpService } from '../../../http-services';
import { AdminHttpService } from '../../../http-services/admin-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register.component',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  catalogue: any = {};
  form: FormGroup;
  roles: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cataloguesHttpService: CataloguesHttpService,
    private adminHttpService: AdminHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
  ) {
    this.findRoleByName();
    this.form = this.buildForm();
    this.roles = [{ label: 'Administrador', value: 'Administrador' }];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/),
        ],
      ],
      role: [null, Validators.required],
    });
  }

  findRoleByName() {
    return this.cataloguesHttpService
      .getRoleByName('ADMIN')
      .subscribe((response) => {
        this.catalogue = response.data;
        this.roleField.setValue(this.catalogue[0].id);
      });
  }

    createAdmin(admin: any) {
      this.adminHttpService.createAdmin(admin).subscribe({
        next: (response) => {
          const newUser = response.data;
          console.log(newUser)
          this.showSuccess();
        setTimeout(() => {
          this.router.navigateByUrl(`/auth/login`);
        }, 1100);
      },
        error: (error) => {
          console.error('Error creating admin:', error);
          alert('Error al crear el usuario');
        }
      });
    }
    
    showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Usuario creado', detail: 'El usuario ha sido creado exitosamente.' });
    }
  
    showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.' });
    }
    onSubmit() {
      if (this.form.valid) {
        const data = this.form.value;
        this.createAdmin(data);
        this.form.reset();
      } else {
        alert('El formulario no es valido');
      }
    }

  validateForm() {
    if (this.form.valid) {
      alert('El formulario es valido');
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

  get roleField(): AbstractControl {
    return this.form.controls['role'];
  }
}

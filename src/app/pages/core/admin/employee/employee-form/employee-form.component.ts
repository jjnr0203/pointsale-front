import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CataloguesHttpService } from '../../../../../http-services';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeFormComponent {
  form: FormGroup;
  userForm: FormGroup;
  employees: any = [];
  roles: any = [];
  catalogue: any = []

  constructor(
    private formBuilder: FormBuilder,
    private employeeHttpService: EmployeeHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute,
    private cataloguesHttpService:CataloguesHttpService
  ) {
    this.findRoleByName();
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.roles = [{ label: 'Empleado'}];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      user: this.userForm,
      shop: ['55d00e3c-c9b5-4505-8ce5-5fd75655dde3', [Validators.required]]
    });
  }

  findRoleByName() {
    return this.cataloguesHttpService
      .getRoleByName('EMPLOYEE')
      .subscribe((response) => {
        this.catalogue = response.data
        this.roleField.setValue(this.catalogue[0].id);
      });
  }

  buildUserForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/),]],
      role: [null, [Validators.required]],
    })
  }

  createEmployee(employee: any) {
    return this.employeeHttpService.create(employee).subscribe();
  }

  onSubmit(){
      if (this.form.valid) {
        const data = this.form.value;
        console.log(data)
        this.createEmployee(data);
        this.form.reset();

        alert("Creado")
      } else {
        alert('El formulario no es valido');
      }
  }

  get nameField(): AbstractControl {
    return this.userForm.controls['name'];
  }

  get emailField(): AbstractControl {
    return this.userForm.controls['email'];
  }

  get passwordField(): AbstractControl {
    return this.userForm.controls['password'];
  }

  get roleField(): AbstractControl {
    return this.userForm.controls['role'];
  }
}

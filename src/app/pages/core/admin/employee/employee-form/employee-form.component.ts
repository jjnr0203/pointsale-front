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
  employees: any[] = [];
  roles: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private employeeHttpService: EmployeeHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute
  ) {
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.roles = [{ label: 'Empleado', value: 'empleado' }];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      user: this.userForm,
      shop: ['5ca520cb-0a41-436a-88b8-c7bf142f559e', [Validators.required]]
    });
  }

  buildUserForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/),]],
      role: ['', Validators.required],
    })
  }

  createEmployee(employee: any) {
    return this.employeeHttpService.create(employee).subscribe((response) => {
      const newUser = response.data;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      console.log(this.form.value)
      this.createEmployee(data)
      this.form.reset();
    } (error: any) => {
      console.log(error)
      alert('Error al crear el empleado');
    };
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

import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EmployeeFormComponent {
  form: FormGroup;
  employees: any[] = [];
  roles: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private employeeHttpService: EmployeeHttpService
  ) {
    this.form = this.buildForm();
    this.roles = [
      { label: 'Empleado', value: 'empleado' },
    ];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.employeeHttpService.create(formData).subscribe(
        (response) => {
          this.employees.push(response); // Agregar el nuevo empleado a la lista local
          alert('Empleado creado exitosamente');
          this.form.reset();
          // Actualizar la lista en EmployeeListComponent
          this.employees
        },
        (error) => {
          console.error('Error al crear el empleado:', error);
          alert('Error al crear el empleado');
        }
      );
    } else {
      alert('El formulario no es válido');
    }
  }



/*   validateForm() {
    if (this.form.valid) {
      alert('El formulario es valido')
    } else {
      alert('El formulario no es valido');
    }
  } */


  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }
<<<<<<< HEAD
  
  get priceField(): AbstractControl {
    return this.form.controls['price'];
=======

  get emailField(): AbstractControl {
    return this.form.controls['email'];
>>>>>>> 1a5db43c22c75f5b2869fe733d2c1bb7700706e0
  }

  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }

  get roleField(): AbstractControl {
    return this.form.controls['role'];
  }
  }
  

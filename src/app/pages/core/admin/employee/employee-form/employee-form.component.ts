import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  form: FormGroup;
  employees: any[] = [];
  result: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    private employeeHttpService: EmployeeHttpService
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      price: [null, [Validators.required]],
      unit: [null, [Validators.required, Validators.min(1)]]
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

  updateCost() {
    const price = this.form.controls['price'].value;
    const unit = this.form.controls['unit'].value;
    this.result = price * unit;
  }

  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }

  get priceField(): AbstractControl {
    return this.form.controls['price'];
  }

  get unitField(): AbstractControl {
    return this.form.controls['unit'];
  }
}

import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CataloguesHttpService } from '../../../../http-services';

@Component({
  selector: 'app-shipper-form',
  templateUrl: './shipper-form.component.html',
  styleUrl: './shipper-form.component.scss'
})
export class ShipperFormComponent {
  catalogue: any = {};
  form: FormGroup;

    constructor(private formBuilder: FormBuilder,
    private cataloguesHttpService:CataloguesHttpService
  ) {
    this.form = this.buildForm();
    this.findByName();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      role:[null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]]
    });
  }

  findByName(){
    return this.cataloguesHttpService.getRoleByName('SHIPPER').subscribe(response=>{ 
      this.catalogue = response.data
      this.roleField.setValue(this.catalogue[0].id)
    })
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
  get roleField(): AbstractControl {
    return this.form.controls['role'];
  } 

  
 /* submit() {
  if (this.customer) {
    this.customerUpdate();
    alert('actualizado')
    this.router.navigate(['home/'+ this.userId])
  } else {
  if (this.customerForm.valid) {
    const data = this.customerForm.value;
    this.httpClient.post('http://localhost:3000/customer', data).subscribe(response => {
      alert('Usuario creado')
      this.router.navigate(['login'])
    },(error) => {
      console.log(error)
      alert('Error al crear el usuario');
    });
  }
}
} */

/* getCustomer(){
  this.httpClient.get('http://localhost:3000/customer/'+ this.userId).subscribe((response: any) => {
        this.customer = response;
        console.log(this.customer);
        this.customerForm.patchValue(this.customer)
  })
} */

/* customerUpdate() {
  this.getCustomer();
  this.customerForm;
  if (this.customerForm.valid) {
  const data = this.customerForm.value;
  this.httpClient
    .put('http://localhost:3000/customer/'+ this.customer.id_customer, data)
    .subscribe((response) => {  
    },(error) => {
      console.log(error)
      alert('Error al actualizar el datos del usuario');
    });
  }
} */
}


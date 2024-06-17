import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { SupplierModel } from '../../../../../models/supplier.model';
import { SupplierHttpService } from '../../../../../http-services/supplier-http.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {
  supplier: FormGroup;
  suppliers: SupplierModel[]= [];
  result: number = 0;
  

  constructor(
    private suppliersHttpService: SupplierHttpService,
    private formBuilder: FormBuilder
  ){
    this.supplier = this.supplierForm();
  }

  supplierForm(): FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
      idShipper: ['esaf18ae1c5se1c8sc1', [Validators.required]]
    })
  }

  onSubmit(){
    if (this.supplier.valid) {
      const supplierData = this.supplier.value;
      this.suppliersHttpService.createSupplier(supplierData).subscribe(
        response => {
          this.suppliers.push(response);
          alert('Provedor creado exitosamente');
          this.supplier.reset();
          this.suppliers
        },
        (error: any) => {
          console.error('Error al crear el provedor:', error);
          alert('Error al crear el provedor');
        }
      )
    } else {
      const data = this.supplier.value;
      this.supplier.markAllAsTouched()
      alert('El formulario no es valido');
    }
  }

  updateSupplier(){
    const name = this.supplier.controls['name'].value;
    const phone = this.supplier.controls['phone'].value;
    const email = this.supplier.controls['email'].value;
    this.result = name * phone * email;
  }

  get nameField(): AbstractControl{
    return this.supplier.controls['name'];
  }
  get phoneField(): AbstractControl{
    return this.supplier.controls['phone'];
  }
  get emailField(): AbstractControl{
    return this.supplier.controls['email'];
  }
  get idShipperField(): AbstractControl{
    return this.supplier.controls['idShop'];
  }

}



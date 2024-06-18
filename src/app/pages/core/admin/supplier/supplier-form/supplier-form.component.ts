import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierModel } from '../../../../../models/supplier.model';
import { SupplierHttpService } from '../../../../../http-services/supplier-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {
  supplier: FormGroup;
  form: FormGroup;
  suppliers: any = [];
  shop: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private suppliersHttpService: SupplierHttpService,
    protected router:Router, 
    private activatedRoute:ActivatedRoute,
  ){  
    this.supplier = this.supplierForm();
    this.form = this.buildForm();
  }

  buildForm():FormGroup{
    return this.formBuilder.group({
      user:this.supplier,
      shop: ['55d00e3c-c9b5-4505-8ce5-5fd75655dde3', Validators.required]
    })
  }


  supplierForm(): FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]],
      nameUser: ['', [Validators.required, Validators.minLength(5)]],
      emailUser:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
    })
  }

  create(supplier:any){
    return this.suppliersHttpService.createSupplier(supplier).subscribe();
  }

  onSubmit(){
    if (this.form.valid) {
      const supplierData = this.form.value;
      console.log(supplierData)
      this.create(supplierData);
      this.form.reset();

      alert("Proveedor creado con éxito.")
      this.router.navigateByUrl('/core/admin/supplier/supplier-list');
    } else {
      this.supplier.markAllAsTouched();
      alert('El formulario no es valido');
    }
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
  get nameUserField(): AbstractControl{
    return this.supplier.controls['nameUser'];
  }
  get emailUserField(): AbstractControl{
    return this.supplier.controls['emailUser'];
  }
  get passwordField(): AbstractControl{
    return this.supplier.controls['password'];
  }
}
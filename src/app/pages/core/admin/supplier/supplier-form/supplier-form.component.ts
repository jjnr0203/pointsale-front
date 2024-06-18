import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierModel } from '../../../../../models/supplier.model';
import { SupplierHttpService } from '../../../../../http-services/supplier-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../../../../http-services/shop.service';
import { CataloguesHttpService } from '../../../../../http-services';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.scss'
})
export class SupplierFormComponent {
  form: FormGroup;
  currentShop: any;
  suppliers: any = [];
  shop: any;
  catalogue:any
  
  userForm:FormGroup;
  constructor(
    private shopService:ShopService,
    private formBuilder: FormBuilder,
    private suppliersHttpService: SupplierHttpService,
    protected router:Router, 
    private activatedRoute:ActivatedRoute,
    private cataloguesHttpService:CataloguesHttpService
  ){  
    this.currentShop = this.shopService.getShop(),
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.findRoleByName()
  }

  buildForm():FormGroup{
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone:['',[Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
      user:this.userForm,
      shops: [[this.currentShop], Validators.required]
    })
  }

  findRoleByName() {
    this.cataloguesHttpService.getRoleByName('SUPPLIER').subscribe(response => { 
      this.catalogue = response.data[0].id;
    }); 
  }


  buildUserForm(): FormGroup{
    return this.formBuilder.group({
      password:['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email, Validators.pattern(/^.+@gmail\.com$/)]],
      role:[this.catalogue]
    })
  }

  create(supplier:any){
    return this.suppliersHttpService.createSupplier(supplier).subscribe(
      response => console.log(response)
    );
  }

  onSubmit(){
    if (this.form.valid) { 
      this.create(this.form.value);
      alert("Proveedor creado con éxito.")
      this.router.navigateByUrl('/core/admin/supplier/supplier-list');
    } else {
      this.form.markAllAsTouched();
      alert('El formulario no es valido');
    }
  }

  get nameField(): AbstractControl{
    return this.form.controls['name'];
  }
  get phoneField(): AbstractControl{
    return this.form.controls['phone'];
  }
  get emailField(): AbstractControl{
    return this.form.controls['email'];
  }
  get nameUserField(): AbstractControl{
    return this.userForm.controls['name'];
  }
  get emailUserField(): AbstractControl{
    return this.userForm.controls['email'];
  }
  get passwordField(): AbstractControl{
    return this.userForm.controls['password'];
  }
}
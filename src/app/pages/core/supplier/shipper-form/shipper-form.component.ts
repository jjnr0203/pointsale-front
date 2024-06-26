import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CataloguesHttpService } from '../../../../http-services';
import { ShipperHttpService } from '../../../../http-services/shipper-http.service';
import { ShipperFormModel } from '../../../../models/user.model';
import { LoginHttpService } from '../../../../http-services/login-http.service';
import { SupplierHttpService } from '../../../../http-services/supplier-http.service';

@Component({
  selector: 'app-shipper-form',
  templateUrl: './shipper-form.component.html',
  styleUrl: './shipper-form.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperFormComponent  {
  id:any;
  supplier:any;
  form: FormGroup;
  userForm: FormGroup;
  shippers: any = [];
  roles: any = [];
  catalogue: any = []

  constructor(
    private formBuilder: FormBuilder,
    private shipperHttpService: ShipperHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute,
    private cataloguesHttpService:CataloguesHttpService,
    private loginHttpService:LoginHttpService,
    private supplierHttpService:SupplierHttpService
  ) {
    this.supplier = this.loginHttpService.getUser()
    this.findRoleByName();
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.roles = [{ label: 'Repartidor'}];
  }

  ngOnInit(): void {
    this.findAll();
    }

    findAll() {
      this.supplierHttpService.findSupplierByUser(this.supplier.sub).subscribe(response => {
        this.id = response.data;
        this.supplierField.setValue(this.id.id)
      });
    }

    get supplierField(): AbstractControl {
      return this.form.controls['supplier'];
    }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      user: this.userForm,
      supplier: [null, [Validators.required]]
    });
  }

  findRoleByName() {
    return this.cataloguesHttpService
      .getRoleByName('SHIPPER')
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

  createShipper(shipper: ShipperFormModel) {
    return this.shipperHttpService.create(shipper).subscribe();
  }

  onSubmit(){
      if (this.form.valid) {
        const data = this.form.value;
        this.createShipper(data);
        this.form.reset();
        alert("Creado")
        this.router.navigateByUrl('/core/supplier/shipper-list');
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

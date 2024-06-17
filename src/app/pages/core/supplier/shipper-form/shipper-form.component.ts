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

@Component({
  selector: 'app-shipper-form',
  templateUrl: './shipper-form.component.html',
  styleUrl: './shipper-form.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class ShipperFormComponent  {
  form: FormGroup;
  userForm: FormGroup;
  shippers: any = [];
  roles: any = [];
  catalogue: any = []

  constructor(
    private formBuilder: FormBuilder,
    private shipperHttpService: ShipperHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute,
    private cataloguesHttpService:CataloguesHttpService
  ) {
    this.findRoleByName();
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.roles = [{ label: 'Repartidor'}];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      user: this.userForm,
      supplier: ['8485cb24-5046-4f8b-a9db-7462c3e1ff67', [Validators.required]]
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
        console.log(data)
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

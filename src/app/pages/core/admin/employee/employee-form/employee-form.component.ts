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
import { ShopService } from '../../../../../http-services/shop.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeFormComponent {
  currentShop: any;
  form: FormGroup;
  userForm: FormGroup;
  employees: any = [];
  roles: any = [];
  catalogue: any = []



  constructor(
    private formBuilder: FormBuilder,
    private employeeHttpService: EmployeeHttpService,
    protected router: Router, private activatedRoute: ActivatedRoute,
    private cataloguesHttpService: CataloguesHttpService,
    private shopService: ShopService,
    private messageService: MessageService,

  ) {
    this.currentShop = this.shopService.getShop()
    this.findRoleByName();
    this.userForm = this.buildUserForm();
    this.form = this.buildForm();
    this.roles = [{ label: 'Empleado' }];
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      user: this.userForm,
      shop: [this.currentShop, [Validators.required]]
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
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/),]],
      role: [null, [Validators.required]],
    })
  }

  createEmployee(employee: any) {
    return this.employeeHttpService.create(employee).subscribe();
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Empleado creado', detail: 'El empleado ha sido creado exitosamente.' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.' });
  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value;
      console.log(data)
      this.createEmployee(data);
      this.form.reset();
      this.showSuccess()
      this.router.navigateByUrl('/core/admin/employee/employee-list');
    } else {
      this.showError()
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

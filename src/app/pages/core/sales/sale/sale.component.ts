import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {removeColor} from "@angular/cli/src/utilities/color";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  dialogVisible: boolean = false;
  showDialog() {
    this.dialogVisible = true;
  }

  customerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.customerForm= this.buildCustomerForm
  }


  get buildCustomerForm():FormGroup{
    return this.formBuilder.group({
      identification:['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

}

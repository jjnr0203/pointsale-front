import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerHttpService} from "../../../../http-services/customer-http.service";
import {CustomerModel} from "../../../../models/customer.model";
import {ResponseModel} from "../../../../models/response.model";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent implements OnInit{
  //show modal
  dialogVisible: boolean = false;
  showDialog() {
    this.dialogVisible = true;
  }
  // forms
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerHttpService:CustomerHttpService ) {
    this.customerForm = this.buildCustomerForm
    this.getCustomers()
  }
  
  ngOnInit(){
    
  }

  get buildCustomerForm():FormGroup{
    return this.formBuilder.group({
      identification:[null , Validators.required],
      name: [null , Validators.required],
      email: [null , Validators.required],
      phone: [null , Validators.required],
      address: [null , Validators.required],
    })
  }

  onSubmit(){
    if (this.customerForm.valid){
      this.createCustomer(this.customerForm.value)
      this.customerForm.reset()
    } else{
      console.log(this.customerForm.errors)
    }
  }

  getCustomers(){
    return this.customerHttpService.findAll().subscribe(response=>console.log(response))
  }
  createCustomer(customer:CustomerModel){
    return this.customerHttpService.create(customer).subscribe(response => console.log(response));
  }

}

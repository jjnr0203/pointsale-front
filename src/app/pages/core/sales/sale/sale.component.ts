import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersHttpService} from "../../../../http-services/customers-http.service";
import {CustomerModel} from "../../../../models/customer.model";
import {ResponseModel} from "../../../../models/response.model";
import {AutoCompleteEvent} from "../../../../models/autocomplete.model";
import {OrderModel} from "../../../../models/order.model";
import {OrdersHttpService} from "../../../../http-services/orders-http.service";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss',
})
export class SaleComponent implements OnInit {
  // forms
  form: FormGroup;
  customerForm: FormGroup;
  orderForm: FormGroup;
  // data
  customers: CustomerModel[] = [];
  products = [
    { id: 1, name: 'Gorra', price: 100 },
    { id: 2, name: ' buzo', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
    { id: 4, name: 'Producto 4', price: 400 },
    { id: 5, name: 'Producto 5', price: 500 }
  ];

  constructor(private formBuilder: FormBuilder, private customersHttpService: CustomersHttpService, private ordersHttpService: OrdersHttpService) {
    this.customerForm = this.newCustomerForm;
    this.orderForm = this.newOrderForm;
    this.form= this.newForm;
  }
  ngOnInit() {
    this.getCustomers()
  }

  get newForm(): FormGroup {
    return this.formBuilder.group({
      customer: [null, Validators.required],
      order: [null, Validators.required],
      ordersDetails: this.formBuilder.array([])
    });
  }

  get ordersDetails(): FormArray {
    return this.form.get('ordersDetails') as FormArray;
  }
  addOrderDetail(): void {
    this.ordersDetails.push(this.formBuilder.group({
      orderId: ['', Validators.required],
      quantity: [1, Validators.required],
      productId: ['', Validators.required]
    }));
  }
  removeItem(index: number): void {
    this.ordersDetails.removeAt(index);
  }

  get newCustomerForm(): FormGroup {
    return this.formBuilder.group({
      identification: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
    })
  }

  get newOrderForm(): FormGroup {
    return this.formBuilder.group({
      shopId: ['3af35618-8919-41f9-a4a8-d99ad5be67fc', Validators.required],
      customerId: [null, Validators.required],
      paymentMethodId: [null, Validators.required]
    })
  }

  onSubmitOrder() {
    this.createOrder(this.orderForm.value)
  }

  onSubmitCustomer() {
    if (!this.selectedCustomer) {
      this.createCustomer(this.customerForm.value)
      this.customerForm.reset();
      this.getCustomers()
    } else {
      this.orderForm.controls['customerId'].setValue(this.selectedCustomer.id)
      this.closeDialog()
    }
  }

  getCustomers() {
    return this.customersHttpService.findAll().subscribe((response: ResponseModel) => {
      this.customers = response.data
      console.log(this.customers)
    })
  }

  createCustomer(customer: CustomerModel) {
    return this.customersHttpService.create(customer).subscribe(response => {
      console.log(response)
      this.getCustomers();
    });
  }

  createOrder(order: OrderModel) {
    return this.ordersHttpService.create(order).subscribe(response => {
      console.log(response)
    })
  }

  //getters customerForm
  get identification(): AbstractControl {
    return this.customerForm.controls['identification'];
  }

  get name(): AbstractControl {
    return this.customerForm.controls['name'];
  }

  get email(): AbstractControl {
    return this.customerForm.controls['email'];
  }

  get phone(): AbstractControl {
    return this.customerForm.controls['phone'];
  }

  get address(): AbstractControl {
    return this.customerForm.controls['address'];
  }

  //getters y setters orderForm
  get customerId(): AbstractControl {
    return this.orderForm.controls['customerId'];
  }

  get shopID(): AbstractControl {
    return this.orderForm.controls['shopId'];
  }

  get paymentMethodId(): AbstractControl {
    return this.orderForm.controls['paymentMethodId'];
  }

  selectedCustomer!: any;
  filteredCustomers: CustomerModel[] = [];
  onCustomerSelect(event: any) {
    this.selectedCustomer = event.value
    this.orderForm.controls['customerId'].setValue(event.value.id);
    this.customerForm.patchValue(event.value)
  }

  onProductSelect(id:string, i:number) {
    this.ordersDetails.at(i).get('productId')?.setValue(id);
    console.log(this.ordersDetails.at(i).get('productId')?.value);
  }

  filterCustomer(event: AutoCompleteEvent) {
    const query = event.query;
    this.filteredCustomers = this.customers.filter((customer: CustomerModel) =>
      customer.identification.toLowerCase().includes(query.toLowerCase())
    );
  }

  dialogVisible: boolean = false;
  showDialog() {
    this.dialogVisible = true;
  }

  closeDialog() {
    this.dialogVisible = false;
    this.customerForm.reset()
  }

  newOrderState: boolean = false;
  actionButtonsState: boolean = true;
  activeActionButtons() {
    this.actionButtonsState = false;
    this.newOrderState = true;
  }

  inactiveActionButtons() {
    this.actionButtonsState = true
    this.newOrderState=false
  }
}

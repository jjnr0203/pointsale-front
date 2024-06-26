import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,FormArray,FormBuilder,FormGroup,Validators
} from '@angular/forms';
import {CustomersHttpService,OrdersHttpService,CataloguesHttpService} from '../../../../http-services';
import {CreateCustomerModel, CustomerModel,} from '../../../../models/customer.model';
import {ResponseModel} from '../../../../models/response.model';
import {OrderModel} from '../../../../models/order.model';
import {ConfirmationService, MessageService} from "primeng/api";
import {first} from "rxjs";
import { ShopService } from '../../../../http-services/shop.service';
import { ShopHttpService } from '../../../../http-services/shop-http.service';
import { ProductsHttpService } from '../../../../http-services/products-http.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss',
})
export class SaleComponent implements OnInit {
  protected readonly Validators = Validators;
  // forms
  customerForm: FormGroup;
  orderForm: FormGroup;
  // data
  currentShop:any;
  payments: any = [];
  customers: CustomerModel[] = [];
  products = [];

  constructor(
    private formBuilder: FormBuilder,
    private customersHttpService: CustomersHttpService,
    private ordersHttpService: OrdersHttpService,
    private productsHttpService:ProductsHttpService,
    private cataloguesHttpService: CataloguesHttpService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private shopService:ShopService
  ) {
    this.currentShop = this.shopService.getShop()
    this.customerForm = this.newCustomerForm();
    this.orderForm = this.newOrderForm();
    this.addValidations();
  }

  ngOnInit() {
    this.getPayments();
    this.getProductsByShop(this.currentShop.id);
    this.getCustomers(this.currentShop.id);
  }

  newCustomerForm(): FormGroup {
    return this.formBuilder.group({
      identification: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
      shops:[[this.currentShop], Validators.required]
    });
  }

  newOrderForm(): FormGroup {
    return this.formBuilder.group({
      shop: [this.currentShop, Validators.required],
      customer: [null, Validators.required],
      paymentMethod: [{value: null, disabled: true}, Validators.required],
      cash: [null],
      cashBack: [null],
      ordersDetails: this.formBuilder.array([]),
    });
  }

  //orders details
  get ordersDetails(): FormArray {
    return this.orderForm.controls['ordersDetails'] as FormArray;
  }
  addOrderDetail(): void {
    this.ordersDetails.push(
      this.formBuilder.group({
        order: ['', Validators.required],
        quantity: [1, Validators.required],
        product: [null, Validators.required],
      })
    );
  }
  removeOrderDetail(index: number): void {
    this.ordersDetails.removeAt(index);
  }

  //on submit methods
  onSubmitOrder(event: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: '¿Está seguro de terminar esta orden?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.createOrder(this.orderForm.value)
      }
    });
  }
  onSubmitCustomer() {
    if (!this.selectedCustomer) {
      this.customerForm.markAllAsTouched()
      if (this.customerForm.valid) {
        console.log(this.customerForm.value)
        this.createCustomer(this.customerForm.value);
        this.closeDialog();
      }
    } else {
      this.orderForm.controls['customer'].setValue(this.selectedCustomer.id);
      this.closeDialog();
    }
  }
  createCustomer(customer: CreateCustomerModel) {
    return this.customersHttpService.create(customer).subscribe((response) => {
      const newUser = response.data;
      this.customer.setValue(newUser.id);
    });
  }

  restartForms(){
    this.actionButtonsState = true;
    this.paymentMethod.disable();
    this.newOrderState = false;
    this.orderForm.reset();
    this.shop.setValue(this.currentShop);
    this.customerForm.reset();
    this.ordersDetails.clear();
  }

  createOrder(order: OrderModel) {
    return this.ordersHttpService.create(order).pipe(
      first()
    ).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'info', summary: 'Confirmed', detail: 'Venta exitosa', life: 3000});
        this.restartForms()
      },
      error: (error) => {
        console.error(error);
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Error al cerrar la orden', life: 3000});
      }
    });
  }

  // getters catalogues
  getCustomers(shopId:string) {
    return this.customersHttpService.findByShop(shopId).subscribe((response: ResponseModel) => this.customers = response.data);
  }

  getProductsByShop(shopId:string) {
     return this.productsHttpService.findByShop(shopId).subscribe((response: ResponseModel) => {
       this.products = response.data;
     });
   }
  getPayments() {
    return this.cataloguesHttpService.getByPayment('PAYMENTS').subscribe(
      (response: ResponseModel) => this.payments = response.data);
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

  //getters orderForm
  get customer(): AbstractControl {
    return this.orderForm.controls['customer'];
  }

  get shop(): AbstractControl {
    return this.orderForm.controls['shop'];
  }

  get paymentMethod(): AbstractControl {
    return this.orderForm.controls['paymentMethod'];
  }

  get cash(): AbstractControl {
    return this.orderForm.controls['cash'];
  }

  get cashBack(): AbstractControl {
    return this.orderForm.controls['cashBack'];
  }

  // functions
  selectedCustomer!: CustomerModel;
  onCustomerSelect(event: any) {
    this.selectedCustomer = event.value;
    this.orderForm.controls['customer'].setValue(event.value.id);
    this.customerForm.patchValue(event.value);
  }

  filteredCustomers: CustomerModel[] = [];
  filterCustomer(event: any) {
    const query = event.query;
    this.filteredCustomers = this.customers.filter((customer: CustomerModel) =>
      customer.identification.toLowerCase().includes(query.toLowerCase())
    );
  }

  addValidations() {
    this.paymentMethod.valueChanges.subscribe((value) => {
      if (value?.code === 2) {
        this.cash.addValidators(Validators.required);
        this.cashBack.addValidators(Validators.required);
      } else {
        this.cash.reset()
        this.cashBack.reset()
        this.cash.removeValidators(Validators.required);
        this.cashBack.removeValidators(Validators.required);
      }
    });
  }

  dialogVisible: boolean = false;
  showDialog() {
    this.dialogVisible = true;
  }

  closeDialog() {
    this.dialogVisible = false;
    this.customerForm.reset();
    this.selectedCustomer = undefined!;
  }

  newOrderState: boolean = false;
  actionButtonsState: boolean = true;
  activeActionButtons() {
    this.paymentMethod.enable()
    this.actionButtonsState = false;
    this.newOrderState = true;
  }
}

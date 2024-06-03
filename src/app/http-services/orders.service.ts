import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private formBuilder: FormBuilder) {}

  customerForm(): FormGroup {
    return this.formBuilder.group({
      identification: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
    });
  }

  orderForm(): FormGroup {
    return this.formBuilder.group({
      shop: ['9ff1970b-7afe-4ce1-ba8b-66c6148c259f', Validators.required],
      customer: [null, Validators.required],
      paymentMethod: [{value: null, disabled: true}, Validators.required],
      cash: [null],
      cashBack: [null],
      ordersDetails: this.formBuilder.array([]),
    });
  }

}

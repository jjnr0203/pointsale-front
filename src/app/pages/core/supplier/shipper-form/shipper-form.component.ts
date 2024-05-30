import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipperHttpService } from '../../../../http-services/shipper-http.service';
import { ShipperModel } from '../../../../models/customer.model';

@Component({
  selector: 'app-shipper-form',
  templateUrl: './shipper-form.component.html',
  styleUrl: './shipper-form.component.scss'
})
export class ShipperFormComponent {

  shipperForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private shipperHttpService:ShipperHttpService ) {
    this.shipperForm = this.buildShipperForm
    this.getShippers()
  }

  get buildShipperForm():FormGroup{
    return this.formBuilder.group({
      name: [null , Validators.required],
      email: [null , Validators.required],
      password: [null , Validators.required],
    })
  }
  validateForm() {
    if (this.shipperForm.valid) {
      alert('¡Formulario válido!');
    } else {
      alert('¡Formulario inválido!');
    }
  }

  get nameField(): AbstractControl {
    return this.shipperForm.controls['name'];
  }

  get emailField(): AbstractControl {
    return this.shipperForm.controls['email'];
  }
  get passwordField(): AbstractControl {
    return this.shipperForm.controls['password'];
  }


  onSubmit(){
    if (this.shipperForm.valid){
      this.createShipper(this.shipperForm.value)
      this.shipperForm.reset()
    } else{
      console.log(this.shipperForm.errors)
    }
  }

  getShippers(){
    return this.shipperHttpService.findAll().subscribe(response=>console.log(response))
  }
  createShipper(shipper:ShipperModel){
    return this.shipperHttpService.create(shipper).subscribe(response => console.log(response));
  }

}

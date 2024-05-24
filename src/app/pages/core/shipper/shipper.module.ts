import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { SupplierInformationComponent } from './supplier-information/supplier-information.component';


@NgModule({
  declarations: [
    SupplierInformationComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule
  ]
})
export class ShipperModule { }

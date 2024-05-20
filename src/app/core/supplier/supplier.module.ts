import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ShipperFormComponent } from './shipper-form/shipper-form.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';


@NgModule({
  declarations: [
    ShipperFormComponent,
    ShipperListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }

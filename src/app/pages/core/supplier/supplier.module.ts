import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ShipperFormComponent } from './shipper-form/shipper-form.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { SharedAppModule } from '../../shared/shared-app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    ShipperFormComponent,
    ShipperListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedAppModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ]
})
export class SupplierModule { }

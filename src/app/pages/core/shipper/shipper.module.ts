import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { SupplierInformationComponent } from './supplier-information/supplier-information.component';
import { SharedAppModule } from '../../shared/shared-app.module';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SupplierInformationComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    SharedAppModule,
    TableModule,
    CardModule,
    ButtonModule
  ]
})
export class ShipperModule { }

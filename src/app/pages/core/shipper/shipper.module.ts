import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { SupplierInformationComponent } from './supplier-information/supplier-information.component';
import { SharedAppModule } from '../../shared/shared-app.module';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';


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
    ButtonModule,
    ImageModule,
    InputTextModule
  ]
})
export class ShipperModule { }

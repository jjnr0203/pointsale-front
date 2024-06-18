import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { OrderListModule } from 'primeng/orderlist';
import { FloatLabelModule } from 'primeng/floatlabel';


@NgModule({
  declarations: [
    SupplierFormComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedAppModule,
    TableModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    ImageModule,
    GalleriaModule,
    InputGroupModule,
    InputGroupAddonModule, 
    InputTextModule,
    FormsModule,
    OrderListModule,
    FloatLabelModule
  ]
})
export class SupplierModule { }

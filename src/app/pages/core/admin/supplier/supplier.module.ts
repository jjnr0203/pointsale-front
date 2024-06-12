import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';


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
  ]
})
export class SupplierModule { }

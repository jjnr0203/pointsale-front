import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ShipperFormComponent } from './shipper-form/shipper-form.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { SharedAppModule } from '../../shared/shared-app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';


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
    TableModule,
    CardModule,
    ConfirmDialogModule,
    ToastModule,
    PasswordModule
  ],
  providers:[
    ConfirmationService,
    MessageService
  ]
})
export class SupplierModule { }

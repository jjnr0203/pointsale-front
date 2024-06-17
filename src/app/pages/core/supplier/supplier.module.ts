import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ShipperFormComponent } from './shipper-form/shipper-form.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { SharedAppModule } from '../../shared/shared-app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TreeTableModule } from 'primeng/treetable';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OrderListModule } from 'primeng/orderlist';
import { ListboxModule } from 'primeng/listbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    ShipperFormComponent,
    ShipperListComponent
  ],
  imports: [
    SupplierRoutingModule,
    SharedAppModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    TreeTableModule,
    TableModule,
    SharedAppModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    OrderListModule,
    ListboxModule,
    CardModule,
    PasswordModule,
    FloatLabelModule,
    DropdownModule,
    DataViewModule,
    FormsModule,
    
  ],
  providers: [ConfirmationService, MessageService]
})
export class SupplierModule { }

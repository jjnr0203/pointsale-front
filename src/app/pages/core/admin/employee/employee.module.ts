import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { SharedAppModule } from '../../../shared/shared-app.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OrderListModule } from 'primeng/orderlist';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
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
    CardModule
  ]
})
export class EmployeeModule { }

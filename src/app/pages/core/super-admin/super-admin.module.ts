import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedAppModule } from '../../shared/shared-app.module';

import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedAppModule,
    DataViewModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ConfirmDialogModule, ButtonModule, ToastModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class SuperAdminModule { }

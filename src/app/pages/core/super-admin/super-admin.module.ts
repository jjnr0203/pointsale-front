import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedAppModule } from '../../shared/shared-app.module';

import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    SharedAppModule,
    DataViewModule
  ]
})
export class SuperAdminModule { }

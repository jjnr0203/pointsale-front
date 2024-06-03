import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleComponent } from './sale/sale.component';
import { ButtonModule } from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {DialogModule} from "primeng/dialog";
import { FloatLabelModule } from 'primeng/floatlabel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SharedAppModule } from '../../shared/shared-app.module';
import {PaginatorModule} from "primeng/paginator";
import {RadioButtonModule} from "primeng/radiobutton";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    SaleComponent,
  ],
  providers:[ConfirmationService, MessageService],
  imports: [
    SharedAppModule,
    CommonModule,
    SalesRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DialogModule,
    FloatLabelModule,
    KeyFilterModule,
    PaginatorModule,
    RadioButtonModule,
    SelectButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ConfirmDialogModule,
    ToastModule,
  ]
})
export class SalesModule { }

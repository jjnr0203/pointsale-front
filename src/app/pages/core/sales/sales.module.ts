import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleComponent } from './sale/sale.component';
import{CardModule} from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import {ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {DialogModule} from "primeng/dialog";
import { FloatLabelModule } from 'primeng/floatlabel';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SharedAppModule } from '../../shared/shared-app.module';
import {TabViewModule} from "primeng/tabview";
import {PaginatorModule} from "primeng/paginator";



@NgModule({
  declarations: [
    SaleComponent,
  ],
  imports: [
    SharedAppModule,
    CommonModule,
    SalesRoutingModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DialogModule,
    FloatLabelModule,
    KeyFilterModule,
    TabViewModule,
    PaginatorModule,
  ]
})
export class SalesModule { }

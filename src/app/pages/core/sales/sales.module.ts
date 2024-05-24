import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleComponent } from './sale/sale.component';
import { NavBarComponent } from '../../../shared/components/nav-bar/nav-bar.component';
import{CardModule} from 'primeng/card'
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
  declarations: [
    SaleComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    CardModule,
    ButtonModule,
    SplitterModule
  ]
})
export class SalesModule { }

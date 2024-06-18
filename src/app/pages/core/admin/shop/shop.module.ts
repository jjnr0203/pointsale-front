import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';
import { OrderListModule } from 'primeng/orderlist';
import { FloatLabelModule } from 'primeng/floatlabel';


@NgModule({
  declarations: [
    ShopFormComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedAppModule,
    TableModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    ImageModule,
    FormsModule,
    OrderListModule,
    FloatLabelModule
  ]
})
export class ShopModule { }

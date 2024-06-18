import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { OrderListModule } from 'primeng/orderlist';
import { FloatLabelModule } from 'primeng/floatlabel';


@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedAppModule,
    TableModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    CarouselModule,
    ImageModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule,
    OrderListModule,
    FormsModule,
    FloatLabelModule,

  ]
})
export class ProductModule { }

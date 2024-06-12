import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';


@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedAppModule
  ]
})
export class ProductModule { }

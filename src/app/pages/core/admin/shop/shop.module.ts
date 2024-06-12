import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopFormComponent } from './shop-form/shop-form.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { SharedAppModule } from '../../../shared/shared-app.module';


@NgModule({
  declarations: [
    ShopFormComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedAppModule
  ]
})
export class ShopModule { }

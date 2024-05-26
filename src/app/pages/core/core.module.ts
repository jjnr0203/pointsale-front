import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from 'primeng/api';
import { SharedAppModule } from '../shared/shared-app.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedAppModule
  ]
})
export class CoreModule { }

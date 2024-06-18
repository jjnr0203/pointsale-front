import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedAppModule } from '../shared/shared-app.module';
import { HomeComponent } from './home/home.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedAppModule,
    ImageModule
  ]
})
export class CoreModule { }

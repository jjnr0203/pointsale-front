import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedAppRoutingModule } from './shared-app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedAppRoutingModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class SharedAppModule { }

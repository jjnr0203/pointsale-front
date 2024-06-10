import { NgModule } from '@angular/core';

import { CommonRoutingModule } from './common-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthenticateComponent } from './unauthenticate/unauthenticate.component';
import { OutServiceComponent } from './out-service/out-service.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    UnauthenticateComponent,
    OutServiceComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule
  ]
})
export class CommonModule { }

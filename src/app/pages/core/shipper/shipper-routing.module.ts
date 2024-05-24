import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierInformationComponent } from './supplier-information/supplier-information.component';

const routes: Routes = [
  {
    path:'supplier-information',
    component: SupplierInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }

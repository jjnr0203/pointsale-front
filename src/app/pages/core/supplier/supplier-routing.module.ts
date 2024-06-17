import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipperFormComponent } from './shipper-form/shipper-form.component';
import { ShipperListComponent } from './shipper-list/shipper-list.component';


const routes: Routes = [
{
  path:'shipper-form',
  component: ShipperFormComponent
},

{
  path:'shipper-list',
  component: ShipperListComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }

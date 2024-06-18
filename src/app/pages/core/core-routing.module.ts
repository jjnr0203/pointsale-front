import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'shipper',
    loadChildren:()=>import('./shipper/shipper.module').then(m=>m.ShipperModule)
  },
  {
    path:'super-admin',
    loadChildren:()=> import('./super-admin/super-admin.module').then(m=>m.SuperAdminModule)
  },
  {
    path:'supplier',
    loadChildren:()=> import('./supplier/supplier.module').then(m=>m.SupplierModule)
  },
  {
    path:'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

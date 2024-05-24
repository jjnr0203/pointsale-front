import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'sales',
    loadChildren:()=>import('../sales/sales.module').then(m=>m.SalesModule)
  },
  {
    path: 'employee',
    loadChildren:()=>import('./employee/employee.module').then( m => m.EmployeeModule)
  },
  {
    path: 'product',
    loadChildren:()=>import('./product/product.module').then( m => m.ProductModule)
  },
  {
    path: 'shop',
    loadChildren:()=>import('./shop/shop.module').then( m => m.ShopModule)
  },
  {
    path: 'supplier',
    loadChildren:()=>import('./supplier/supplier.module').then( m => m.SupplierModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

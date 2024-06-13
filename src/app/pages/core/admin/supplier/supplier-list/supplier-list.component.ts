import { Component } from '@angular/core';
import { SupplierHttpService } from '../../../../../http-services/supplier-http.service';
import { SupplierModel } from '../../../../../models/supplier.model';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent {

  suppliers: any = [];

  constructor(private supplierHttpService: SupplierHttpService) {
    this.findAll();
  }

  findAll() {
   this.supplierHttpService.findAll().subscribe(response => {
    this.suppliers = response;
    console.log(this.suppliers);
   })
  }

  //createSupplier(supplier: SupplierModel){
    //this.supplierHttpService.createSupplier(supplier).subscribe(response =>{
      //console.log(response)
    //})
  //}

  finOneShupplier(id:string){
    this.supplierHttpService.finOneShupplier(id).subscribe(response => {
      this.suppliers = response;
    })
  }

  //updateSupplier(id:string, supplier:SupplierModel){
    //this.supplierHttpService.updateSupplier(id, supplier). subscribe(response => {
      //console.log(response);
    //} )
  //}

  deleteSupplier(id:string){
    this.supplierHttpService.deleteSupplier(id).subscribe(response => {
      console.log(response)
    })
  }
}

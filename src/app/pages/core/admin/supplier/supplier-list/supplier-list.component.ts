import { Component, OnInit } from '@angular/core';
import { SupplierHttpService } from '../../../../../http-services/supplier-http.service';
import { SupplierModel } from '../../../../../models/supplier.model';
import { ShopService } from '../../../../../http-services/shop.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent implements OnInit {
  suppliers: any = [];
  filteredSuppliers: any = [];
  searchTerm: string = '';
  curretnShop:any;

  constructor(
    private supplierHttpService: SupplierHttpService,
    private shopService:ShopService
  ){
    this.curretnShop = this.shopService.getShop()
  }
  ngOnInit(): void {
    this.findAll(this.curretnShop.id)
  }

  findAll(id:string) {
   this.supplierHttpService.findAll(id).subscribe(response => {
    this.suppliers = response.data;
    this.filteredSuppliers = this.suppliers;
    console.log(this.suppliers);
   })
  }

  filterSuppliers() {
    if (this.searchTerm) {
      this.filteredSuppliers = this.suppliers.filter((supplier: any) =>
        supplier.user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        supplier.user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredSuppliers = this.suppliers;
    }
  }

  //createSupplier(supplier: SupplierModel){
    //this.supplierHttpService.createSupplier(supplier).subscribe(response =>{
      //console.log(response)
    //})
  //}

  /* finOneShupplier(id:string){
    this.supplierHttpService.finOneShupplier(id).subscribe(response => {
      this.suppliers = response;
    })
  } */

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

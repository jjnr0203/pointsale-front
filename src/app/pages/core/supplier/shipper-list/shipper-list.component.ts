import { Component } from '@angular/core';
import { ShipperHttpService } from '../../../../http-services/shipper-http.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrl: './shipper-list.component.scss'
})
export class ShipperListComponent {

  shippers: any = [];
  
  constructor(private shipperHttpService:ShipperHttpService){
    this.findAll()
  }
  
  findAll(){
    return this.shipperHttpService.findAll().subscribe(response => {this.shippers = response});
  }

}

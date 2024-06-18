import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShipperHttpService } from '../../../../http-services/shipper-http.service';
import { ResponseModel } from '../../../../models/response.model';
import { LoginHttpService } from '../../../../http-services/login-http.service';

@Component({
  selector: 'app-supplier-information',
  templateUrl: './supplier-information.component.html',
  styleUrls: ['./supplier-information.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SupplierInformationComponent implements OnInit {
  user: any;
  shipper: any;

  constructor(private shipperHttpService: ShipperHttpService,
    private loginHttpService:LoginHttpService
  ) { 
    this.user = this.loginHttpService.getUser()
    console.log(this.user)
  }
  
  ngOnInit() {
    this.shipperHttpService.findShipperBySupplierUserId(this.user.sub).subscribe(
      response => {this.shipper = response.data
      console.log(response)
      console.log(this.shipper)
  })
  }

  

  
  
}

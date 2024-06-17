import { Component, OnInit } from '@angular/core';
import { ShipperHttpService } from '../../../../http-services/shipper-http.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserDeleteModel } from '../../../../models/user.model';
import { catchError, of } from 'rxjs';
import { AdminHttpService } from '../../../../http-services/admin-http.service';
import { CataloguesHttpService } from '../../../../http-services';
import { LoginHttpService } from '../../../../http-services/login-http.service';
import { SupplierHttpService } from '../../../../http-services/supplier-http.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrl: './shipper-list.component.scss'
})

export class ShipperListComponent implements OnInit{
    user:any;
    catalogue: any = [];
    shippers: any = [];
    filteredShippers: any = [];
    searchTerm: string = '';
    confirmOpened: boolean = false; 
  
    constructor(private shipperHttpService:ShipperHttpService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService,
                private loginHttpService:LoginHttpService,
              private supplierHttpService:SupplierHttpService){
      this.user = this.loginHttpService.getUser()
    }
    
    ngOnInit(): void {
    this.findAll();
    }

    findAll() {
      this.shipperHttpService.findShipperBySupplier(this.user.sub).subscribe(response => {
        this.shippers = response.data;
        this.filteredShippers = this.shippers;
        console.log(response)
      });
    }

    filterShippers() {
      if (this.searchTerm) {
        this.filteredShippers = this.shippers.filter((shipper: any) =>
          shipper.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          shipper.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.filteredShippers = this.shippers;
      }
    }
  
    confirm(event: Event, shipper: UserDeleteModel) {
      if (!this.confirmOpened) { 
        this.confirmOpened = true;
        this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: '¿Deseas eliminar este registro?',
          header: 'Confirmación de Eliminación',
          icon: 'pi pi-info-circle',
          acceptButtonStyleClass: 'p-button-danger p-button-text',
          rejectButtonStyleClass: 'p-button-text p-button-text',
          acceptIcon: 'pi pi-check',
          rejectIcon: 'pi pi-times',
          accept: () => {
            this.deleteShipper(shipper);
            this.confirmOpened = false;
          },
          reject: () => {
            this.confirmOpened = false; 
          }
        });
      }
    }
    
  
    deleteShipper(shipper: UserDeleteModel) {
      this.shipperHttpService.delete(shipper.id).pipe(
        catchError(error => {
          console.error('Error deleting user:', error);
          return of(null);
        })
      ).subscribe(() => {
        this.findAll();
      });
    }
  }
  
  
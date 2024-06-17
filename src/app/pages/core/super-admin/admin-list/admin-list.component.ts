import { Component } from '@angular/core';
import { AdminHttpService } from '../../../../http-services/admin-http.service';
import { catchError } from 'rxjs/operators';
import { CataloguesHttpService } from '../../../../http-services';
import { UserDeleteModel } from '../../../../models/user.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent {
  catalogue: any = [];
  users: any = [];
  filteredUsers: any = [];
  searchTerm: string = '';
  confirmOpened: boolean = false; 

  constructor(private adminHttpService: AdminHttpService,
              private cataloguesHttpService: CataloguesHttpService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService) {
    this.findRoleByName();
  }

  findRoleByName() {
    this.cataloguesHttpService.getRoleByName('ADMIN').subscribe(response => { 
      this.catalogue = response.data[0].id;
      this.findAll();
    });
  }

  findAll() {
    this.adminHttpService.findUserByRole(this.catalogue).subscribe(response => {
      this.users = response;
      this.filteredUsers = this.users;
    });
  }

  filterUsers() {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter((user: any) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

  confirm(event: Event, user: UserDeleteModel) {
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
          this.deleteUser(user);
          this.confirmOpened = false;
        },
        reject: () => {
          this.confirmOpened = false; 
        }
      });
    }
  }
  
  deleteUser(user: UserDeleteModel) {
    this.adminHttpService.delete(user.id).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return of(null);
      })
    ).subscribe(() => {
      this.findAll();
    });
  }
}

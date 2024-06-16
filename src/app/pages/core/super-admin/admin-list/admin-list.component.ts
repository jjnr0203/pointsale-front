import { Component } from '@angular/core';
import { AdminHttpService } from '../../../../http-services/admin-http.service';
import { catchError, of } from 'rxjs';
import { CataloguesHttpService } from '../../../../http-services';
import { UserDeleteModel } from '../../../../models/user.model';

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

  constructor(private adminHttpService: AdminHttpService, private cataloguesHttpService:CataloguesHttpService) {
    this.findRoleByName();
  }

  findRoleByName(){
    return this.cataloguesHttpService.getRoleByName('ADMIN').subscribe(response=>{ 
      this.catalogue = response.data[0].id;
      this.findAll();
    })
  }

  findAll() {
    this.adminHttpService.findUserByRole(this.catalogue).subscribe(response => {
      this.users = response;
      this.filteredUsers = this.users;
      console.log(this.filteredUsers)
    });
  }

  filterCustomer(event: any) {
    const query = event.query;
    this.filteredUsers = this.users.filter((user: any) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
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


import { Component } from '@angular/core';
import { AdminHttpService } from '../../../../http-services/admin-http.service';
import { AdminModel } from '../../../../models/response.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent {
  users: any = [];
  filteredUsers: any = [];
  searchTerm: string = '';

  constructor(private adminHttpService: AdminHttpService) {
    this.findAll();
  }

  findAll() {
    this.adminHttpService.findAll().subscribe(response => {
      this.users = response.data;
      this.filteredUsers = response.data;
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

  /* deleteUser(user:AdminModel) {
    this.adminHttpService.delete(user.id).subscribe(() => {
      this.filteredUsers = this.filteredUsers.filter((u: any) => u !== user);
      this.users = this.users.filter((u: any) => u !== user);
    });
  } */

  deleteUser(user: AdminModel) {
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


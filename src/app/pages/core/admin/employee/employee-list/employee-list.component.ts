import { Component } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';
import { catchError, of } from 'rxjs';
import { UserDeleteModel } from '../../../../../models/user.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employees: any = [];
  filteredEmployees: any = [];
  searchTerm: string = '';

  constructor(private employeeHttpService: EmployeeHttpService) {
    this.findAll();
  }

  findAll() {
    this.employeeHttpService.findEmployeeByShop('1fcc8f68-8f56-4173-8aad-664df6be324f').subscribe(response => {
      this.employees = response;
      this.filteredEmployees = response;
    });
  }

  filterEmployees() {
    if (this.searchTerm) {
      this.filteredEmployees = this.employees.filter((employee: any) =>
        employee.user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  deleteEmployee(employee: UserDeleteModel) {
    this.employeeHttpService.delete(employee.id).pipe(
      catchError(error => {
        console.error('Error deleting user:', error);
        return of(null);
      })
    ).subscribe(() => {
      this.findAll();
    });
  }
}
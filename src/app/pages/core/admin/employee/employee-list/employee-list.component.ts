import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';
import { catchError, of } from 'rxjs';
import { UserDeleteModel } from '../../../../../models/user.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent {
  employees: any = [];
  filteredEmployees: any = [];
  searchTerm: string = '';


  constructor(private employeeHttpService: EmployeeHttpService) {
    this.findAll();
  }

  findAll() {
    this.employeeHttpService.findEmployeeByShop('55d00e3c-c9b5-4505-8ce5-5fd75655dde3').subscribe(response => {
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
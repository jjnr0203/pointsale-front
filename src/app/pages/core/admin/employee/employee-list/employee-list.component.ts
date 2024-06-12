import { Component } from '@angular/core';
import { EmployeeHttpService } from '../../../../../http-services/employee-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  employes: any = [];
  constructor(private employeeHttpService: EmployeeHttpService) {
    this.findAll()
  }

  findAll() {
    return this.employeeHttpService.findAll().subscribe(response => { this.employes = response })
  }

/*   updateUser() {
    this.employeeHttpService.update('1', {}).subscribe(response => {
      console.log(response);
    })
  } */

    deleteUser(id: string) {
      this.employeeHttpService.delete(id).subscribe(response => {
        console.log(response);
      })
    }

    /* findUserOne(id: string) {
      this.employeeHttpService.findOne(id).subscribe(response => {
        this.user = response;
      });
    } */

}


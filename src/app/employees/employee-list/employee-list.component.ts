import { Employee } from 'src/app/shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  constructor(public employeeService: EmployeeServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  populateForm(employee: Employee) {
    /**breaks two way data binding */
    this.employeeService.formEmployee = Object.assign({}, employee);
  }

  removeEmployee(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.employeeService.deleteEmployee(id).subscribe( (data: Employee) => {
        console.log(data);
        let foundEmpIndex = this.employeeService.employees.findIndex(i => i.ID == data.ID);
        this.employeeService.employees.splice(foundEmpIndex, 1);
        this.toastr.info(`User : ${data.FullName} has been deleted`, 'CRUD API');
      });
    }
  }

}

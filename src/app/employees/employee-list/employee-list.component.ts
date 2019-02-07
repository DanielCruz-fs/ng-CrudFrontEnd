import { Employee } from 'src/app/shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  constructor(public employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  populateForm(employee: Employee) {
    /**breaks two way data binding */
    this.employeeService.formEmployee = Object.assign({}, employee);
  }

}

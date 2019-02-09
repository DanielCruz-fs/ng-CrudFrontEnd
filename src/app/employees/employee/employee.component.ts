import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.employeeService.formEmployee = {
      ID: null,
      FullName: '',
      Position: '',
      EmpCode: '',
      Mobile: ''
    }
  }
  
  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.ID == null) {
      this.insertEmployee(employeeForm);
    } else {
      this.updateEmployee(employeeForm);
    }
  }

  insertEmployee(employeeForm: NgForm) {
    this.employeeService.postEmployee(employeeForm.value).subscribe((data: Employee) => {
      this.employeeService.employees.push(data);
      this.toastr.success('New employee added', 'CRUD API');
      this.resetForm(employeeForm);
      console.log(data);
    });
  }

  updateEmployee(employeeForm: NgForm) {
    this.employeeService.putEmployee(employeeForm.value).subscribe((data: Employee) => {
      let foundEmpIndex = this.employeeService.employees.findIndex(i => i.ID == data.ID);
      this.employeeService.employees[foundEmpIndex] = data;
      this.toastr.warning('Employee updated', 'CRUD API');
      this.resetForm(employeeForm);
      console.log(data);
    });
  }

}

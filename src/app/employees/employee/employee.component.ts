import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/shared/employee-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeServiceService) { }

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
    this.employeeService.postEmployee(employeeForm.value).subscribe(data => {
      this.resetForm(employeeForm);
      console.log(data);
    });
  }
}

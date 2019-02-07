import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employees: Employee[] = [];
  formEmployee: Employee;
  readonly url: string = 'http://localhost:64420/api';

  constructor(private http: HttpClient) { }

  getEmployees() {
    this.http.get(`${this.url}/Employee`).subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }
  
  postEmployee(data: Employee) {
    return this.http.post(`${this.url}/Employee`, data);
  }

  putEmployee(data: Employee) {
    return this.http.put(`${this.url}/Employee/${data.ID}`, data);
  }
}

import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  formEmployee: Employee;
  readonly url: string = 'http://localhost:64420/api';

  constructor(private http: HttpClient) { }

  postEmployee(data: Employee) {
    return this.http.post(`${this.url}/Employee`, data);
  }
}

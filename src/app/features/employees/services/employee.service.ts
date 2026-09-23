import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employee.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  private http = inject(HttpClient);

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/employees.json');
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return this.http
      .get<Employee[]>('/employees.json')
      .pipe(map(employees => employees.find((e: Employee) => id === e.id)));
  }
}

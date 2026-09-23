import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Employee } from '../../models/employee.interface';
import { EmployeeCard } from '../../components/employee-card/employee-card';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeCard],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EmployeeList implements OnInit {
  employees = signal<Employee[]>([]);

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private ref: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      console.log('Before:', this.employees.length);

      this.employees.set([...data]);

      console.log('After:', this.employees.length);
    });
  }

  onViewDetails(event: any) {
    this.router.navigate(['/employees/', event.id]);
  }

  createEmployee() {
    this.router.navigate(['/employees/create']);
  }
}

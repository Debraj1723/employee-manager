import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
  employeeID!: string;

  employee = signal<Employee | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
  ) {
    this.employeeID = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.employeeService.getEmployeeById(Number(this.employeeID)).subscribe((data) => {
      this.employee.set(data);
    });
  }

  goBack() {
    this.router.navigate(['/employees']);
  }
}

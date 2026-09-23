import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css',
})
export class EmployeeCard {
  @Input() employee!: Employee;

  @Output() viewDetails = new EventEmitter<Employee>();
}

import { Routes } from '@angular/router';
import { EmployeeList } from './pages/employee-list/employee-list';
import { EmployeeDetails } from './pages/employee-details/employee-details';
import { AddEmployee } from './pages/add-employee/add-employee';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    component: EmployeeList,
  },
  {
    path: 'create',
    component: AddEmployee,
  },
  {
    path: ':id',
    component: EmployeeDetails,
  },
  
];

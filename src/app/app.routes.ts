import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('../app/features/employees/employees.routes').then(
        (m) => m.EMPLOYEE_ROUTES,
      ),
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
];

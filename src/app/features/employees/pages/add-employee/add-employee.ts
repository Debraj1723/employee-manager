import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  employeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(26),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    skills: new FormArray<FormControl<String>>([]),
  });

  constructor() {
    // this.employeeForm.valueChanges.subscribe((data)=>{
    //   console.log(data);
    // })
    this.employeeForm.controls.department.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  addSkills(): void {
    this.employeeForm.controls.skills.push(new FormControl('', { nonNullable: true }));
  }

  removeSkill(index: number): void {
    this.employeeForm.controls.skills.removeAt(index);
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    console.log(this.employeeForm.value);
  }
}

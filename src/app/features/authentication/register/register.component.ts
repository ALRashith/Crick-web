import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';

@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private readonly router: Router, private readonly auth: AuthService) { }

  readonly registerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.auth.register(this.registerForm.getRawValue()).subscribe({
      next: (response) => {
        console.log('Data received:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed. Is the API running at http://localhost:8080?', error);
      }
    });
  }
}
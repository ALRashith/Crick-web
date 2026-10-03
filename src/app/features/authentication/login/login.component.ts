import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (private readonly router: Router, private readonly auth: AuthService) {}

  readonly loginForm = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  async submit() {
    try {
      if (this.loginForm.invalid) {
          this.loginForm.markAllAsTouched();
      } else {
        const response = await firstValueFrom(
          this.auth.login(this.loginForm.getRawValue())
        );
        this.auth.setToken(response.token);
        this.router.navigate(['/home'])
        console.log('Login success:', response);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}
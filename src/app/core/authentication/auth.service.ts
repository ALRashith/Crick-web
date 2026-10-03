import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly tokenKey = 'auth_token';

  constructor (private appData : ApiServiceService ) {}

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  register(user: any): Observable <any> {
    return this.appData.post('/users/register', user)
  }

  login(user: any): Observable <any> {
    return this.appData.post('/auth/login', user)
  }
}
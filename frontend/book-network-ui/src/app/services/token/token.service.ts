import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  isTokenValid() {
    const token: string = this.token;
    if (!token) {
      return false;
    }

    const jwtHelperService: JwtHelperService = new JwtHelperService();
    const isTokenExpired: boolean = jwtHelperService.isTokenExpired(token);
    if (isTokenExpired) {
      localStorage.clear();
      return false;
    }
    return true;

  }
  isTokenNotValid() {
    return !this.isTokenValid();
  }
  constructor() {}

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token() {
    return localStorage.getItem('token') as string;
  }
}

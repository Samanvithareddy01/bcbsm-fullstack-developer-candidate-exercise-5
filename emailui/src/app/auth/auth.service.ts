import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  /**
   *
   */
  constructor(private http: HttpClient) {
  }

  login(username: string, pwd: string) {
    //  if (username === 'admin' && password === 'test123') {
    //   this.isAuthenticated = true;
    //   return true;
    // }
    // return false;
    return this.http.post('{Add URL}', {userName: username, password: pwd})
    .pipe(tap(v => {
        this.isAuthenticated = true;
    }));
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

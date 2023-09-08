import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private user = '';

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
    return this.http.post('http://localhost:8080/api/login', 
    {userName: username, password: pwd}, {headers: {
      'Cookie': 'JSESSIONID=5DD47D0C2D3030B63A3C773D7DB38C29'
    }})
    .pipe(tap(v => {
        this.isAuthenticated = true;
        this.user = username;
    }));
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  get userInfo() {
    return this.user;
  }
}

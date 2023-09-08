import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {
    
  }


  onLoginSubmit() {
    this.auth.login(this.userName, this.password)
      .subscribe(v => {
        // success message .
        this.router.navigate(['/attachment'])
      })
  }

}

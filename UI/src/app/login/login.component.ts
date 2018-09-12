import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string;
  respData: object;
  status = true;

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit(formData) {

    this.loginService.login({userName: this.userName}).subscribe(
      data => {
        const return_code = data['return_code'];
        if (return_code === '9000') {
          this.loginService.isLoggedIn = true;
        }

        if (this.loginService.isLoggedIn) {
          localStorage.setItem('userName', this.userName);
          const redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/cspro';
          this.router.navigate([redirect]);
        } else {
          this.status = false;
        }
      }
    );


  }

}

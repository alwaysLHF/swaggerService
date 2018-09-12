import { Injectable } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private httpRequestService: HttpRequestService, private router: Router) { }
  login(reqBody) {
    return this.httpRequestService.login(reqBody);
  }
}

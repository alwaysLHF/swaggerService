import { Injectable } from '@angular/core';
import {  CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn || localStorage.getItem('userName')) {
      return true;
    }

    // 保存试图访问的地址
    this.loginService.redirectUrl = url;
    // 跳转到登录页面
    this.router.navigate(['/login']);
    return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

    return this.service.getCurrentUser().map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
      }
      return true;
    })
  }
}

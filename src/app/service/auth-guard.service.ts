import { Router, CanActivate } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticatorService, public router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isLogged()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

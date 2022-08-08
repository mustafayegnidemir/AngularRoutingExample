import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate{

  constructor(
    private authService : AuthService,
    private router: Router
    ){

  }

  canActivate():any{
    return this.authService.isAuthenticated()
      .then((authenticated: any | boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/'])
          return false;
        }
      })
      .catch()
  }
}

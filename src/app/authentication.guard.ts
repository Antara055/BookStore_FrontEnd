import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthgaurdServiceService } from './service/authgaurd-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

constructor(private Authguardservice: AuthgaurdServiceService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/register");  
    }  
    return this.Authguardservice.gettoken();  
}  
  
  
}

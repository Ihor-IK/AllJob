import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CvAuthService} from './cv-auth.service';

@Injectable()
export class CvAuthGuard implements CanActivate {
  constructor(
    private auth: CvAuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true
    } else {
      this.auth.logout()
      this.router.navigate(['/admin-cv', 'login'], {
        queryParams: {
          loginAgain: true
        }
      })
    }
  }

}
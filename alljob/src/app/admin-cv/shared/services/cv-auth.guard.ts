import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CvAuthService} from './cv-auth.service';

@Injectable()
export class CvAuthGuard implements CanActivate {
  constructor(
    private cv_auth: CvAuthService,
    private cv_router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cv_auth.isAuthenticated()) {
      return true
    } else {
      this.cv_auth.logout()
      this.cv_router.navigate(['/admin-cv', 'cv-login'], {
        queryParams: {
          loginAgain: true
        }
      })
    }
  }

}
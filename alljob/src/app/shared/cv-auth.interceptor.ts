import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import { CvAuthService } from '../admin-cv/shared/services/cv-auth.service';

@Injectable()
export class CvAuthInterceptor implements HttpInterceptor {
  constructor(
    private cv_auth: CvAuthService,
    private cv_router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.cv_auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          cv_auth: this.cv_auth.token
        }
      })
    }
    return next.handle(req)
      .pipe(
        tap(() => {
          console.log('Intercept')
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('[CvInterceptor Error]: ', error)
          if (error.status === 401) {
            this.cv_auth.logout()
            this.cv_router.navigate(['/admin-cv', 'cv-login'], {
              queryParams: {
                cv_authFailed: true
              }
            })
          }
          return throwError(error)
        })
      )
  }
} 
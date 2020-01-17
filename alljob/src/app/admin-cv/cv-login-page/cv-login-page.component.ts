import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {User} from '../../shared/interfaces';
import {CvAuthService} from '../shared/services/cv-auth.service';

@Component({
  selector: 'app-cv-login-page',
  templateUrl: './cv-login-page.component.html',
  styleUrls: ['./cv-login-page.component.scss']
})
export class CvLoginPageComponent implements OnInit {

  form: FormGroup
  submitted = false
  message: string

  constructor(
    public cv_auth: CvAuthService,
    private cv_router: Router,
    private cv_route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.cv_route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please enter data'
      } else if (params['cv_authFailed']) {
        this.message = 'The session has expired. Re-enter data'
      }
    })

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.cv_auth.login(user).subscribe(() => {
      this.form.reset()
      this.cv_router.navigate(['/admin-cv', 'cv-dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}

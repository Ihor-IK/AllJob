import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CvAlertService } from '../shared/services/cv-alert.service';
import { CvAuthService } from '../shared/services/cv-auth.service';
import { UserService } from '../../shared/user.service';

@Component({
    selector: 'app-cv-register',
    templateUrl: './cv-register.component.html',
    styleUrls: ['./cv-register.component.scss']
})
export class CvRegisterComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        // private formBuilder: FormBuilder,
        // private router: Router,
        // private cv_authService: CvAuthService,
        // private userService: UserService,
        // private cv_alertService: CvAlertService
    )
      {
    //     // redirect to home if already logged in
    //     if (this.cv_authService.isAuthenticated) {
    //         this.router.navigate(['/']);
    //    }
    }

    ngOnInit() {
        // this.registerForm = this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     username: ['', Validators.required],
        //     password: ['', [Validators.required, Validators.minLength(6)]]
        // });
    }

    // convenience getter for easy access to form fields
    // get f() { return this.registerForm.controls; }

    onSubmit() {
        // this.submitted = true;

        // // stop here if form is invalid
        // if (this.registerForm.invalid) {
        //     return;
        // }

        // this.loading = true;
        // this.userService.register(this.registerForm.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.cv_alertService.success('Registration successful');
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.cv_alertService.alert$;
        //             this.loading = false;
        //         });
    }
}


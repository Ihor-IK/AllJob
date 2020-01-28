import {Component, OnInit, NgZone} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Job, User} from '../../shared/interfaces';
import { JobsService } from '../../shared/jobs.service';
import { AlertService } from '../shared/services/alert.service';
import { AuthenticationService } from 'src/app/shared/components/authentication.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';



@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;

user : User


  constructor(
    private jobsService: JobsService,
    private alert: AlertService,
    public authService: AuthenticationService,
     
    public router: Router,

    public ngZone: NgZone ) {
  }

  ngOnInit() {
      this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      companyDescription: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      requiredSkills: new FormControl(null, Validators.required),
      dateEnd: new FormControl(null, Validators.required),
      email_user: new FormControl(null)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }
     const job: Job = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),
      dateEnd: this.form.value.dateEnd,
      city: this.form.value.city,
      companyDescription: this.form.value.companyDescription,
      salary: this.form.value.salary,
      type: this.form.value.type,
      requiredSkills: this.form.value.requiredSkills,      
      email_user: this.form.value.email_user
    }

    this.jobsService.create(job).subscribe(() => {
      this.form.reset()
      this.alert.success('The job was created')
    })
    // console.log(job)
  }

}

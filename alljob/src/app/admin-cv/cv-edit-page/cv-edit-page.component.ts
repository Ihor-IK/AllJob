import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Cv} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import { CvsService } from '../../shared/cv.service';
import {ActivatedRoute, Params} from '@angular/router';
import { CvAlertService } from '../shared/services/cv-alert.service';

@Component({
  selector: 'app-cv-edit-page',
  templateUrl: './cv-edit-page.component.html',
  styleUrls: ['./cv-edit-page.component.scss']
})
export class CvEditPageComponent implements OnInit {

  form: FormGroup
  cv: Cv
  submitted = false

  uSub: Subscription

  constructor(
    private cv_route: ActivatedRoute,
    private cvsService: CvsService,
    private cv_alert: CvAlertService
  ) {
  }

  ngOnInit() {
    this.cv_route.params.pipe(
      switchMap((params: Params) => {
        return this.cvsService.getById(params['id'])
      })
    ).subscribe((cv: Cv) => {
      this.cv = cv
      this.form = new FormGroup({
        title: new FormControl(cv.title, Validators.required),
        text: new FormControl(cv.text, Validators.required),
        author: new FormControl(cv.author, Validators.required),
        city: new FormControl(cv.city, Validators.required),
        Description: new FormControl(cv.Description, Validators.required),
        salary: new FormControl(cv.salary, Validators.required),
        type: new FormControl(cv.type, Validators.required),
        Skills: new FormControl(cv.Skills, Validators.required),
        date: new FormControl(cv.date, Validators.required),
        dateEnd: new FormControl(cv.dateEnd, Validators.required),
        email_user: new FormControl(cv.email_user)
      })
    })
  }


  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.uSub = this.cvsService.update({
      ...this.cv,
      author: this.form.value.author,
      text: this.form.value.text,
      title: this.form.value.title,
      city: this.form.value.city,
      Description: this.form.value.Description,
      salary: this.form.value.salary,
      type: this.form.value.type,
      Skills: this.form.value.Skills,
      date: this.form.value.date,
      dateEnd: this.form.value.dateEnd,
      email_user: this.form.value.email_user
    }).subscribe(() => {
      this.submitted = false
      this.cv_alert.success('The cv was update')
    })
  }
}

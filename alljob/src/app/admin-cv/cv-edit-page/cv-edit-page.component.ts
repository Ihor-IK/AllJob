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
        author: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        Description: new FormControl(null, Validators.required),
        salary: new FormControl(null, Validators.required),
        type: new FormControl(null, Validators.required),
        Skills: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
        dateEnd: new FormControl(null, Validators.required)
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
      dateEnd: this.form.value.dateEnd
    }).subscribe(() => {
      this.submitted = false
      this.cv_alert.success('The cv was update')
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {JobsService} from '../../shared/jobs.service';
import {switchMap} from 'rxjs/operators';
import {Job} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  form: FormGroup
  job: Job
  submitted = false

  uSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private alert: AlertService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.jobsService.getById(params['id'])
      })
    ).subscribe((job: Job) => {
      this.job = job
      this.form = new FormGroup({
      title: new FormControl(job.title, Validators.required),
      text: new FormControl(job.text, Validators.required),
      author: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      companyDescription: new FormControl(null, Validators.required),
      salary: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      requiredSkills: new FormControl(null, Validators.required)
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

    this.uSub = this.jobsService.update({
      ...this.job,
      author: this.form.value.author,
      text: this.form.value.text,
      title: this.form.value.title,
      city: this.form.value.city,
      companyDescription: this.form.value.companyDescription,
      salary: this.form.value.salary,
      type: this.form.value.type,
      requiredSkills: this.form.value.requiredSkills
    }).subscribe(() => {
      this.submitted = false
      this.alert.success('The job was update')
    })
  }
}

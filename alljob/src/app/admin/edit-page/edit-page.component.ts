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
        text: new FormControl(job.text, Validators.required)
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
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submitted = false
      this.alert.success('The job was update')
    })
  }
}

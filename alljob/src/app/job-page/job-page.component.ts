import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Job } from '../shared/interfaces';
import { JobsService } from '../shared/jobs.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.scss']
})
export class JobPageComponent implements OnInit {

  job$: Observable<Job>

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService
  ) {
  }

  ngOnInit() {
    this.job$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.jobsService.getById(params['id'])
      }))
  }

}

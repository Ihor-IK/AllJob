import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobsService} from '../../shared/jobs.service';
import {Job} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  jobs: Job[] = []
  pSub: Subscription
  searchStr = ''

  constructor(private jobsService: JobsService) {
  }

  ngOnInit() {
    this.pSub = this.jobsService.getAll().subscribe(jobs => {
      this.jobs = jobs
    })
  }

  remove(id: string) {

  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}


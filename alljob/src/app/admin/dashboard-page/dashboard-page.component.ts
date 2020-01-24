import {Component, OnDestroy, OnInit} from '@angular/core';
import {JobsService} from '../../shared/jobs.service';
import {Job, User} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  jobs: Job[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''


  constructor(private jobsService: JobsService,
    private alert: AlertService) {
  }

  ngOnInit() {
    this.pSub = this.jobsService.getAll().subscribe(jobs => {
      this.jobs = jobs
    })
  }

  remove(id: string) {
    this.dSub = this.jobsService.remove(id).subscribe(() => {
      this.jobs = this.jobs.filter(job => job.id !== id)
      this.alert.warning('The job was delete')
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

}
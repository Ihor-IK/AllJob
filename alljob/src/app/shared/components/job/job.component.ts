import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../interfaces';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: Job[] = []
  search = ''

  @Input() job: Job
  constructor() { }

  ngOnInit() {
  }

}

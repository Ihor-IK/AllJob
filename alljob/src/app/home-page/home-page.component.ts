import { Component, OnInit } from '@angular/core';
import { JobsService } from '../shared/jobs.service';
import { Observable } from 'rxjs';
import { Job } from '../shared/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  jobs: Job[] = []
  search = ''

  onSearch(searchBy : any){
    this.search = searchBy;
  }
  order = undefined;

onOrderBy(orderBy : any){
      this.order = orderBy;
}

  jobs$: Observable<Job[]>

  constructor(private jobsService: JobsService) {
  }

  ngOnInit() {
    this.jobs$ = this.jobsService.getAll()
  }

}

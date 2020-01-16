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
  searchType = ''
  searchSalary = ''
  searchCity = ''
  searchAuthor = ''
  searchRequiredSkills = ''
  FilterDelete = ''

  onSearch(searchBy : any){
    this.search = searchBy;
  }
  onSearchType(searchBy : any){
    this.searchType = searchBy;
  }
  onSearchSalary(searchBy : any){
    this.searchSalary = searchBy;
  }
  onSearchCity(searchBy : any){
    this.searchCity = searchBy;
  }
  onSearchAuthor(searchBy : any){
    this.searchAuthor = searchBy;
  }
  onSearchRequiredSkills(searchBy : any){
    this.searchRequiredSkills = searchBy;
  }

  onFilterDelete(searchBy : any){
    this.searchRequiredSkills = searchBy;
    this.searchAuthor = searchBy;
    this.searchCity = searchBy;
    this.searchSalary = searchBy;
    this.searchType = searchBy;
    this.search = searchBy;
  }

  jobs$: Observable<Job[]>

  constructor(private jobsService: JobsService) {
  }

  ngOnInit() {
    this.jobs$ = this.jobsService.getAll()
  }

}

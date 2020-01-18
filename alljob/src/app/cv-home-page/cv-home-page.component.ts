import { Component, OnInit } from '@angular/core';
import { Cv } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { CvsService } from '../shared/cv.service';

@Component({
  selector: 'app-cv-home-page',
  templateUrl: './cv-home-page.component.html',
  styleUrls: ['./cv-home-page.component.scss']
})
export class CvHomePageComponent implements OnInit {
  cvs: Cv[] = []
  cv_search = ''
  cv_searchType = ''
  cv_searchSalary = ''
  cv_searchCity = ''
  cv_searchAuthor = ''
  cv_searchSkills = ''
  cv_filterDelete = ''

  on_cv_Search(searchBy : any){
    this.cv_search = searchBy;
  }
  on_cv_SearchType(searchBy : any){
    this.cv_searchType = searchBy;
  }
  on_cv_SearchSalary(searchBy : any){
    this.cv_searchSalary = searchBy;
  }
  on_cv_SearchCity(searchBy : any){
    this.cv_searchCity = searchBy;
  }
  on_cv_SearchAuthor(searchBy : any){
    this.cv_searchAuthor = searchBy;
  }
  on_cv_SearchSkills(searchBy : any){
    this.cv_searchSkills = searchBy;
  }

  on_cv_FilterDelete(searchBy : any){
    this.cv_searchSkills = searchBy;
    this.cv_searchAuthor = searchBy;
    this.cv_searchCity = searchBy;
    this.cv_searchSalary = searchBy;
    this.cv_searchType = searchBy;
    this.cv_search = searchBy;
  }

  cvs$: Observable<Cv[]>

  constructor(private CvsService: CvsService) {
  }

  ngOnInit() {
    this.cvs$ = this.CvsService.getAll()
  }
}
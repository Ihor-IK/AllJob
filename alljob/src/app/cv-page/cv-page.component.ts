import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Params,ActivatedRoute } from '@angular/router';
import { CvsService } from '../shared/cv.service';
import {Observable} from 'rxjs';
import { Cv } from '../shared/interfaces';

@Component({
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.scss']
})
export class CvPageComponent implements OnInit {

  cv$: Observable<Cv>

  constructor(
    private route: ActivatedRoute,
    private cvsService: CvsService
  ) {
  }

  ngOnInit() {
    this.cv$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.cvsService.getById(params['id'])
      }))
  }

}

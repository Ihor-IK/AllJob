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

  cvs$: Observable<Cv[]>

  constructor(private CvsService: CvsService) {
  }

  ngOnInit() {
    this.cvs$ = this.CvsService.getAll()
  }
}
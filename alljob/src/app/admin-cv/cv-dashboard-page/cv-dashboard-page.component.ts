import { Component, OnInit } from '@angular/core';
import { Cv } from '../../shared/interfaces';
import { Subscription } from 'rxjs';
import { CvsService } from '../../shared/cv.service';
import { CvAlertService } from '../shared/services/cv-alert.service';

@Component({
  selector: 'app-cv-dashboard-page',
  templateUrl: './cv-dashboard-page.component.html',
  styleUrls: ['./cv-dashboard-page.component.scss']
})
export class CvDashboardPageComponent implements OnInit {

  cvs: Cv[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''

  constructor(private cvsService: CvsService,
    private alert: CvAlertService) {
  }

  ngOnInit() {
    this.pSub = this.cvsService.getAll().subscribe(cvs => {
      this.cvs = cvs
    })
  }

  remove(id: string) {
    this.dSub = this.cvsService.remove(id).subscribe(() => {
      this.cvs = this.cvs.filter(cv => cv.id !== id)
      this.alert.warning('The cv was delete')
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
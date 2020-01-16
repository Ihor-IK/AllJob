import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CvAlertService } from '../../services/cv-alert.service';

@Component({
  selector: 'app-alert-cv',
  templateUrl: './alert-cv.component.html',
  styleUrls: ['./alert-cv.component.scss']
})
export class AlertCvComponent implements OnInit {

  @Input() delay = 5000

  public text: string
  public type = 'success'

  aSub: Subscription

  constructor(private alertService: CvAlertService) { }

  ngOnInit() {
    this.aSub = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}

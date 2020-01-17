import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CvAuthService } from '../../services/cv-auth.service';


@Component({
  selector: 'app-admin-cv-layout',
  templateUrl: './admin-cv-layout.component.html',
  styleUrls: ['./admin-cv-layout.component.scss']
})
export class AdminCvLayoutComponent implements OnInit {

  constructor(
    private cv_router: Router,
    public cv_auth: CvAuthService
    ) {
  }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.cv_auth.logout();
    this.cv_router.navigate(['/admin-cv', 'cv-login']);
  }
}

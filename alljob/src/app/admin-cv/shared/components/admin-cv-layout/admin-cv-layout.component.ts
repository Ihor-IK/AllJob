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
    private router: Router,
    public auth: CvAuthService
    ) {
  }

  ngOnInit() {
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/admin-cv', 'cv-login']);
  }
}

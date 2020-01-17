import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminCvLayoutComponent } from './shared/components/admin-cv-layout/admin-cv-layout.component';

import { SharedModule } from '../shared/shared.module';
import { CvAuthGuard } from './shared/services/cv-auth.guard';

import { AlertCvComponent } from './shared/components/alert-cv/alert-cv.component';
import { CvAlertService } from './shared/services/cv-alert.service';
import { CvCreatePageComponent } from './cv-create-page/cv-create-page.component';
import { CvDashboardPageComponent } from './cv-dashboard-page/cv-dashboard-page.component';
import { CvEditPageComponent } from './cv-edit-page/cv-edit-page.component';
import { CvLoginPageComponent } from './cv-login-page/cv-login-page.component';
import { CvSearchPipe } from "./shared/pipes/cv-search.pipe";


@NgModule({
    declarations: [
      AdminCvLayoutComponent,
      AlertCvComponent,
      CvCreatePageComponent,
      CvDashboardPageComponent,
      CvEditPageComponent,
      CvLoginPageComponent,
      CvSearchPipe
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      RouterModule.forChild([
        {
          path: '', component: AdminCvLayoutComponent, children: [
            {path: '', redirectTo: '/admin-cv/cv-login', pathMatch: 'full'},
            {path: 'cv-login', component: CvLoginPageComponent},
            {path: 'cv-dashboard', component: CvDashboardPageComponent, canActivate: [CvAuthGuard]},
            {path: 'cv-create', component: CvCreatePageComponent, canActivate: [CvAuthGuard]},
            {path: 'cv/:id/cv-edit', component: CvEditPageComponent, canActivate: [CvAuthGuard]}
          ]
        }
      ])
    ],
    exports: [RouterModule],
    providers: [CvAuthGuard, CvAlertService]
  })
  export class AdminModule {
  
  }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import enLocale from '@angular/common/locales/en';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPageComponent } from './job-page/job-page.component';
import { JobComponent } from './shared/components/job/job.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/auth.interceptor';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/components/pipe/filter.pipe';
import { FilterTypePipe } from './shared/components/pipe/filter-type.pipe';
import { FilterSalaryPipe } from './shared/components/pipe/filter-salary.pipe';
import { FilterCityPipe } from './shared/components/pipe/filter-city.pipe';
import { FilterAuthorPipe } from './shared/components/pipe/filter-author.pipe';
import { FilterRequiredSkillsPipe } from './shared/components/pipe/filter-required-skills.pipe';
import { CvComponent } from './shared/components/cv/cv.component';
import { CvHomePageComponent } from './cv-home-page/cv-home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { CvAuthInterceptor } from './shared/cv-auth.interceptor';
import { CvFilterAuthorPipe } from './shared/components/pipe/cv_filter-author.pipe';
import { CvFilterPipe } from './shared/components/pipe/cv_filter.pipe';
import { CvFilterTypePipe } from './shared/components/pipe/cv_filter-type.pipe';
import { CvFilterSalaryPipe } from './shared/components/pipe/cv_filter-salary.pipe';
import { CvFilterCityPipe } from './shared/components/pipe/cv_filter-city.pipe';
import { CvFilterSkillsPipe } from './shared/components/pipe/cv_filter-skills.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './shared/components/authentication.service';






registerLocaleData(enLocale, 'en')

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

const CV_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: CvAuthInterceptor
}


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    JobPageComponent,
    JobComponent,
    FilterPipe,
    FilterTypePipe,
    FilterSalaryPipe,
    FilterCityPipe,
    FilterAuthorPipe,
    FilterRequiredSkillsPipe,
    CvComponent,
    CvHomePageComponent,
    PortfolioPageComponent,
    CvPageComponent,
    CvFilterPipe,
    CvFilterTypePipe,
    CvFilterSalaryPipe,
    CvFilterCityPipe,
    CvFilterAuthorPipe,
    CvFilterSkillsPipe,
    RegisterComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthInterceptor, CvAuthInterceptor,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import {registerLocaleData} from '@angular/common';
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





registerLocaleData(enLocale, 'en')

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
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
    CvPageComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { SearchesComponent } from './shared/components/searches/searches.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/components/pipe/filter.pipe';
import { FilterTypePipe } from './shared/components/pipe/filter-type.pipe';
import { FilterSalaryPipe } from './shared/components/pipe/filter-salary.pipe';
import { FilterCityPipe } from './shared/components/pipe/filter-city.pipe';
import { FilterAuthorPipe } from './shared/components/pipe/filter-author.pipe';
import { FilterRequiredSkillsPipe } from './shared/components/pipe/filter-required-skills.pipe';



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
    SearchesComponent,
    FilterPipe,
    FilterTypePipe,
    FilterSalaryPipe,
    FilterCityPipe,
    FilterAuthorPipe,
    FilterRequiredSkillsPipe

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

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CvHomePageComponent } from './cv-home-page/cv-home-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { CvPageComponent } from './cv-page/cv-page.component';
import { CvRegisterComponent } from './admin-cv/cv-register/cv-register.component';




const routes: Routes = [
  //root object will represent layout
  {
    path: '', component: MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'job/:id', component: JobPageComponent},
      {path: 'cv', component: CvHomePageComponent},
      {path: 'cv/:id', component: CvPageComponent},
      {path: 'cv-registre', component: CvRegisterComponent},
      {path: 'portfolio', component: PortfolioPageComponent}
      
    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'admin-cv', loadChildren: './admin-cv/admin-cv.module#AdminModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

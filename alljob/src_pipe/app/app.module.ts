import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgDirectivesComponent } from './ng-directives/ng-directives.component';
import { FileSizePipe } from './file-size.pipe';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SizeFormatPipe } from './size-format.pipe';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EmployeesComponent,
    NgDirectivesComponent,
    FileSizePipe,
    PipesDemoComponent,
    SizeFormatPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

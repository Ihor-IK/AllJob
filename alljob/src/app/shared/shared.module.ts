import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import { OrderByPipe } from './components/pipe/order-by.pipe';
//import { FilterPipe } from './filter.pipe';


@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    QuillModule
  ],
  declarations: [OrderByPipe]
})
export class SharedModule {

}

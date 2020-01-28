import {Pipe, PipeTransform} from '@angular/core';
import { Cv } from '../../../shared/interfaces';



@Pipe({
  name: 'searchCvs'
})
export class CvSearchPipe implements PipeTransform {
  transform(cvs: Cv[], search = ''): Cv[] {
    if (!search.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.email_user.toLowerCase().includes(search.toLowerCase())
    })
  }

}
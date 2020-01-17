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
      return cv.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
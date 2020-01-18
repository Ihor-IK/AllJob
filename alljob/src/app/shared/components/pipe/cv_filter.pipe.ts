import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filter'
})
export class CvFilterPipe implements PipeTransform {

  transform(cvs: Cv[], cv_search = ''): Cv[] {
    if (!cv_search.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.title.toLowerCase().includes(cv_search.toLowerCase())
    })
  }

}

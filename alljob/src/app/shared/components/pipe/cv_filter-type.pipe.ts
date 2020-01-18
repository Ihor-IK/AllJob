import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filterType'
})
export class CvFilterTypePipe implements PipeTransform {

  transform(cvs: Cv[], cv_searchType = ''): Cv[] {
    if (!cv_searchType.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.type.toLowerCase().includes(cv_searchType.toLowerCase())
    })
  }

}

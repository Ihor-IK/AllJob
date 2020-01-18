import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filterSalary'
})
export class CvFilterSalaryPipe implements PipeTransform {

  transform(cvs: Cv[], cv_searchSalary = ''): Cv[] {
    if (!cv_searchSalary.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.salary.toLowerCase().includes(cv_searchSalary.toLowerCase())
    })
  }

}

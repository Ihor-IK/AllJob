import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filterCity'
})
export class CvFilterCityPipe implements PipeTransform {

  transform(cvs: Cv[], cv_searchCity = ''): Cv[] {
    if (!cv_searchCity.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.city.toLowerCase().includes(cv_searchCity.toLowerCase())
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filterAuthor'
})
export class CvFilterAuthorPipe implements PipeTransform {

  transform(cvs: Cv[], cv_searchAuthor = ''): Cv[] {
    if (!cv_searchAuthor.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.author.toLowerCase().includes(cv_searchAuthor.toLowerCase())
    })
  }

}

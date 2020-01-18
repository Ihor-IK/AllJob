import { Pipe, PipeTransform } from '@angular/core';
import { Cv } from '../../interfaces';

@Pipe({
  name: 'cv_filterSkills'
})
export class CvFilterSkillsPipe implements PipeTransform {

  transform(cvs: Cv[], cv_searchSkills = ''): Cv[] {
    if (!cv_searchSkills.trim()) {
      return cvs
    }

    return cvs.filter(cv => {
      return cv.Skills.toLowerCase().includes(cv_searchSkills.toLowerCase())
    })
  }

}


import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../interfaces';

@Pipe({
  name: 'filterRequiredSkills'
})
export class FilterRequiredSkillsPipe implements PipeTransform {

  transform(jobs: Job[], searchRequiredSkills = ''): Job[] {
    if (!searchRequiredSkills.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.requiredSkills.toLowerCase().includes(searchRequiredSkills.toLowerCase())
    })
  }

}


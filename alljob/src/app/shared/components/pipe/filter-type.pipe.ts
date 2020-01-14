import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../interfaces';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(jobs: Job[], searchType = ''): Job[] {
    if (!searchType.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.type.toLowerCase().includes(searchType.toLowerCase())
    })
  }

}

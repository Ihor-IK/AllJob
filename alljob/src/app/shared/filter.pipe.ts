import { Pipe, PipeTransform } from '@angular/core';
import { Job } from './interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(jobs: Job[], search = ''): Job[] {
    if (!search.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}

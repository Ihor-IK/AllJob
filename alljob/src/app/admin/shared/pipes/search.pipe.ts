import {Pipe, PipeTransform} from '@angular/core';
import { Job } from '../../../shared/interfaces';



@Pipe({
  name: 'searchJobs'
})
export class SearchPipe implements PipeTransform {
  transform(jobs: Job[], search = ''): Job[] {
    if (!search.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.email_user.toLowerCase().includes(search.toLowerCase())
    })
  }

}
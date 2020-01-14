import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../interfaces';

@Pipe({
  name: 'filterAuthor'
})
export class FilterAuthorPipe implements PipeTransform {

  transform(jobs: Job[], searchAuthor = ''): Job[] {
    if (!searchAuthor.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.author.toLowerCase().includes(searchAuthor.toLowerCase())
    })
  }

}

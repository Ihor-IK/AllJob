import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../interfaces';

@Pipe({
  name: 'filterSalary'
})
export class FilterSalaryPipe implements PipeTransform {

  transform(jobs: Job[], searchSalary = ''): Job[] {
    if (!searchSalary.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.salary.toLowerCase().includes(searchSalary.toLowerCase())
    })
  }

}

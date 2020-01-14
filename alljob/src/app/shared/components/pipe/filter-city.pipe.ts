import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../interfaces';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(jobs: Job[], searchCity = ''): Job[] {
    if (!searchCity.trim()) {
      return jobs
    }

    return jobs.filter(job => {
      return job.city.toLowerCase().includes(searchCity.toLowerCase())
    })
  }

}

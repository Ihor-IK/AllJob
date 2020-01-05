import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Job} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class JobsService {
  constructor(private http: HttpClient) {}

  create(job: Job): Observable<Job> {
    return this.http.post(`${environment.fbDbUrl}/jobs.json`, job)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...job,
          id: response.name,
          date: new Date(job.date)
        }
      }))
  }
  getAll(): Observable<Job[]> {
    return this.http.get(`${environment.fbDbUrl}/jobs.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/jobs/${id}.json`)
  }
}
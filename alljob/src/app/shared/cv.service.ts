import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FbCreateResponse, Cv } from './interfaces';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class CvsService {
    constructor(private http: HttpClient) { }

    create(cv: Cv): Observable<Cv> {
        return this.http.post(`${environment.fbDbUrl}/cvs.json`, cv)
            .pipe(map((response: FbCreateResponse) => {
                return {
                    ...cv,
                    id: response.name,
                    date: new Date(cv.date)
                }
            }))
    }
    getAll(): Observable<Cv[]> {
        return this.http.get(`${environment.fbDbUrl}/cvs.json`)
            .pipe(map((response: { [key: string]: any }) => {
                return Object
                    .keys(response)
                    .map(key => ({
                        ...response[key],
                        id: key,
                        date: new Date(response[key].date)
                    }))
            }))
    }

    getById(id: string): Observable<Cv> {
        return this.http.get<Cv>(`${environment.fbDbUrl}/cvs/${id}.json`)
            .pipe(map((cv: Cv) => {
                return {
                    ...cv, id,
                    date: new Date(cv.date)
                }
            }))
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.fbDbUrl}/cvs/${id}.json`)
    }
    update(cv: Cv): Observable<Cv> {
        return this.http.patch<Cv>(`${environment.fbDbUrl}/cvs/${cv.id}.json`, cv)
    }
}
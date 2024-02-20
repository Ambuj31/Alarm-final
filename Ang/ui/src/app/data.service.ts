// alarm.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alarm } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {
  private apiUrl = 'http://localhost:3000/readData';

  constructor(private http: HttpClient) { }

  getAlarms(): Observable<Alarm[]> {
    return this.http.get<Alarm[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error getting alarms:', error);
        return throwError(error);
      })
    );
  }

  getAlarmById(id: number): Observable<Alarm> {
    return this.http.get<Alarm>(`${this.apiUrl}/${id}`);
  }

  addAlarm(alarm: Alarm): Observable<Alarm> {
    return this.http.post<Alarm>(this.apiUrl, alarm);
  }

  updateAlarm(alarm: Alarm): Observable<Alarm> {
    return this.http.put<Alarm>(`${this.apiUrl}/${alarm.id}`, alarm);
  }


  deleteAlarm(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

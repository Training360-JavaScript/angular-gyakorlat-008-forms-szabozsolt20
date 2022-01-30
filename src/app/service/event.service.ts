import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl: string = "https://nettuts.hu/jms/feladat/events";

  constructor(
    private http: HttpClient) {
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }

  update(event: Event): Observable<any> {
    return this.http.patch<Observable<any>>(
      `${this.eventsUrl}/${event.id}`,
      event,
    );
  }

  create(event: Event): Observable<any> {
    return this.http.post<Observable<any>>(this.eventsUrl, event);
  }

  remove(id: number): Observable<any> {
    return this.http.delete<Observable<any>>(`${this.eventsUrl}/${id}`);
  }

}

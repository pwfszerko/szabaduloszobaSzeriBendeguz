import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foglalas } from './foglalas.model.ts';

@Injectable({
  providedIn: 'root'
})
export class FoglalasokService {
  private apiUrl = 'http://localhost:3000/foglalasok';

  constructor(private http: HttpClient) { }

  getFoglalasok(): Observable<Foglalas[]> {
    return this.http.get<Foglalas[]>(this.apiUrl);
  }
}

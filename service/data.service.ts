import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://api.publicapis.org/categories';

  constructor(private http: HttpClient) { }

  gatData(): Observable<any> {
    return this.http.get<any>(this.url);

  }
  searchHeroes(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any>(`${this.url}/?name=${term}`).pipe(
    );
  }
}

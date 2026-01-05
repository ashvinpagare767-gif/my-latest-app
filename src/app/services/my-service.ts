import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyService {
 
 private employeesUrl = 'https://dummyjson.com/users';
  private booksUrl = 'https://openlibrary.org/subjects/love.json?limit=5';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.http.get(this.employeesUrl);
    
  }
}

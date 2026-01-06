import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
export interface Todo{
  id:number
  todo: string,
  completed: string;
  userId: string;
};
interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class MyService {
 

  private userListUrl="https://dummyjson.com/todos";

  constructor(private http: HttpClient) { }

  
  getUserData(pageSize: number, skip: number): Observable<any>{
    return this.http.get(`https://dummyjson.com/todos?limit=${pageSize}&skip=${skip}`)
    .pipe(
      catchError(this.handleError) // Local error handling
    );;
  }

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('https://dummyjson.com/todos/add', JSON.stringify(data), { headers });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMsg = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMsg = `Client Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMsg = `Server Error: ${error.status} - ${error.message}`;
    }
    console.error(errorMsg);
    return throwError(() => new Error(errorMsg));
  }

    
}

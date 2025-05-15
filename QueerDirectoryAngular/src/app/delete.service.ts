import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private baseURL = `https://queer-books-api.onrender.com/books/remove`

  constructor(private http:HttpClient) { }

  deleteBook(id: string): Observable<any> {
  return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  } 
}

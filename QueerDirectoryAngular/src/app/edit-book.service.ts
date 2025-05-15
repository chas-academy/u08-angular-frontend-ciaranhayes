import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditBookService {
  private baseURL = `https://queer-books-api.onrender.com/books/edit`;

  constructor(private http:HttpClient) { }

  editBook(id: string, updatedBookData: any): Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, updatedBookData);
  }
}

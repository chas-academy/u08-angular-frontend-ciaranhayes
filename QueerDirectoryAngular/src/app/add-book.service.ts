import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  private baseURL = `https://queer-books-api.onrender.com/books/new`;

  constructor(private http:HttpClient) { }

  addBook(addedBookData: any):Observable<any>{
    return this.http.post(`${this.baseURL}`, addedBookData)
  }
}

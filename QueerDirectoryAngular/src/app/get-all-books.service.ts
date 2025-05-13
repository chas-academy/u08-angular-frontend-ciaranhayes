import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllBooksService {
  private baseURL = `https://queer-books-api.onrender.com/books`;

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(`${this.baseURL}`)
  }
}

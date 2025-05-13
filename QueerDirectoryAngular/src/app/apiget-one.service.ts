import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIGetOneService {
  private baseUrl = `https://queer-books-api.onrender.com/books`

  constructor(private http: HttpClient) { }

  getBook(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}

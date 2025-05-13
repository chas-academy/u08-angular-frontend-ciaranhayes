import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGenreService {
  private baseURL = `https://queer-books-api.onrender.com/books/genre`;

  constructor(private http:HttpClient) { }

  getGenre(genre: string): Observable<any>{
    return this.http.get(`${this.baseURL}/${genre}`)
  }
}

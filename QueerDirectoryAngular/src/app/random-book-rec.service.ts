import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomBookRecService {
  private baseUrl = `https://queer-books-api.onrender.com/recommendation`

  constructor(private http: HttpClient) { }

  getRandomBook(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
}

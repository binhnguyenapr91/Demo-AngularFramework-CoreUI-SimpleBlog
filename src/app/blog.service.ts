import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from './blog';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly API_URL = 'http://localhost:8080/api/blog/';
  constructor(private httpClient: HttpClient) { }
  getBlogs(count = 10): Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }
}

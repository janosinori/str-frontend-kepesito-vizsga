import { Injectable } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //BASE_URL = 'http://localhost:3000/movies';
  apiUrl: string = `https://tr360-frontend-exam-april.azurewebsites.net/janosinori/movies`;

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(id: number): Observable<MovieListComponent> {
    return this.http.get<MovieListComponent>(`${this.apiUrl}/${id}`);
  }

  delete(id: number): Observable<MovieListComponent> {
    return this.http.delete<MovieListComponent>(`${this.apiUrl}/${id}`);
  }

}

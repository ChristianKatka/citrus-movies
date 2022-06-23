import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Movie } from 'src/shared/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMoviesToHomePage(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiBaseUrl}/movies`);
  }

  searchMovies(searchTerm: string): Observable<Movie> {
    return this.http.post<Movie>(`${environment.apiBaseUrl}/movies/${searchTerm}`, {});
  }
}

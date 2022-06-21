import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMoviesToHomePage() {
    return this.http.get(`${environment.apiBaseUrl}/movies`);
  }

  searchMovies(searchTerm: string) {
    return this.http.post(`${environment.apiBaseUrl}/movies/${searchTerm}`, {});
  }
}

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { Movie, Person } from './types';
import movies from '../assets/fake-data/movies.json';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[];

  constructor() {
    this.movies = movies.data.map((movie) => {
      return {
        title: movie.title,
        year: movie.year,
        actorActress: { name: movie.actorActress },
        rating: undefined,
      };
    });
  }

  getMovies(): Observable<Movie[]> {
    return new Observable((observer) => {
      try {
        observer.next(this.movies);
        observer.complete();
      } catch (error) {
        observer.error(this.handleError);
      }
    });
  }

  addMovie(movie: Movie): void {
    this.movies = [...this.movies, movie];
  }

  private handleError(error: Error) {
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}

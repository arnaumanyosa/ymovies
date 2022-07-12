import { Component, OnInit } from '@angular/core';
import { Observable, of, map, catchError, startWith } from 'rxjs';

import { Movie, ObservableState } from '../types';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  filter: string;
  // movies: Movie[];
  movies$: Observable<ObservableState<Movie[]>> | undefined;

  constructor(private moviesService: MoviesService) {
    // this.movies = [];
    this.filter = '';
    this.movies$ = undefined;
  }

  ngOnInit(): void {
    // this.moviesService.getMovies().subscribe({
    //   next: (response) => (this.movies = response),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('movie list loaded'),
    // });
    this.movies$ = this.moviesService.getMovies().pipe(
      map((data) => ({ isLoading: false, data })),
      catchError((error) => of({ isLoading: false, error })),
      startWith({ isLoading: true })
    );
  }

  onKeyUp(filter: string) {
    this.filter = filter.toLowerCase();
  }
}

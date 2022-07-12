import { Component, OnInit } from '@angular/core';

import { Movie } from '../types';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  filter: string;
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.movies = [];
    this.filter = '';
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe({
      next: (response) => (this.movies = response),
      error: (e) => console.error(e),
      complete: () => console.info('movie list loaded'),
    });
  }

  onKeyUp(filter: string) {
    this.filter = filter.toLowerCase();
  }
}

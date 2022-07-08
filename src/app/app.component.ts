import { Component, OnInit } from '@angular/core';

import { Movie } from './types';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string;
  movieFilter: string;
  movies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.title = 'Yokoy Movies';
    this.movieFilter = '';
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(
      (response) => {
        this.movies = response;
      },
      (error: Error) => {
        console.log('GetMovies', error);
      }
    );
  }

  onKeyUp(movieFilter: string) {
    this.movieFilter = movieFilter.toLowerCase();
  }

  addMovie() {
    this.movies.push({
      title: 'another movie',
      year: '2022',
      actorActress: 'xxx',
      rating: undefined,
    });
  }
}

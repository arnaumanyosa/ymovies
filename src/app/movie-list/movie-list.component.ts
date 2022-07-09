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
    this.moviesService.getMovies().subscribe(
      (response) => {
        this.movies = response;
      },
      (error: Error) => {
        console.log('GetMovies', error);
      }
    );
  }

  onKeyUp(filter: string) {
    this.filter = filter.toLowerCase();
  }

  // addMovie() {
  //   this.movies.push({
  //     title: 'another movie',
  //     year: '2022',
  //     actorActress: 'xxx',
  //     rating: undefined,
  //   });
  // }
}

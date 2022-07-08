import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../types';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input('movies') movieList: Movie[];
  @Input('filter') filter: string;

  constructor() {
    this.movieList = [];
    this.filter = '';
  }

  ngOnInit(): void {}
}

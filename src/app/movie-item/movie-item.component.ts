import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../types';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Input('movie') movie: Movie;

  constructor() {
    this.movie = {} as Movie;
  }

  ngOnInit(): void {}

  onClick($event: MouseEvent) {
    console.log('movie has been clicked', $event.currentTarget);
  }
}

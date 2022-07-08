import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Movie } from '../types';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit {
  @Input('movie') movie: Movie;

  constructor(public dialog: MatDialog) {
    this.movie = {} as Movie;
  }

  ngOnInit(): void {}

  onClick($event: MouseEvent) {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      data: { title: this.movie.title },
    });

    dialogRef.afterClosed().subscribe((rating: number) => {
      this.movie.rating = rating;
    });
  }
}

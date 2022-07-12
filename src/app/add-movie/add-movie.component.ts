import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router } from '@angular/router';

import { Movie, Person } from '../types';
import { MoviesService } from './../movies.service';
import people from '../../assets/fake-data/people.json';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  actorsActresses: Person[];
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Title',
        placeholder: 'Enter movie title...',
        required: true,
      },
    },
    {
      key: 'year',
      type: 'input',
      templateOptions: {
        label: 'Year',
        placeholder: 'Enter year...',
        required: true,
      },
    },
    {
      key: 'actorActress',
      type: 'select',
      templateOptions: {
        label: 'Actor/Actress',
        placeholder: 'Enter name of main Actor or actress',
        required: true,
        options: [],
      },
    },
  ];

  constructor(private moviesService: MoviesService, private router: Router) {
    this.actorsActresses = people.data;
  }

  ngOnInit(): void {
    //Load list of Actors/Actresses to select element
    const actorActressField = this.fields.find(
      (field) => field.key === 'actorActress'
    );

    if (actorActressField && actorActressField.templateOptions) {
      actorActressField.templateOptions.options = this.actorsActresses.map(
        (person) => ({ value: person.name, label: person.name })
      );
    }
  }

  onSubmit(movie: any) {
    this.moviesService.addMovie({
      title: movie.title,
      year: movie.year,
      actorActress: { name: movie.actorActress },
      rating: undefined,
    });
    this.router.navigateByUrl('/');
  }
}

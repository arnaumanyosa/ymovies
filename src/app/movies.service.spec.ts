import { TestBed } from '@angular/core/testing';

import { Movie } from './types';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service should return some movies', (done) => {
    const movies$ = service.getMovies();

    const expectedMovies = [
      {
        title: 'The Lord of the Springs',
        year: '2002',
        actorActress: { name: 'Elijah Boost' },
        rating: undefined,
      },
      {
        title: 'The Dance Club',
        year: '1999',
        actorActress: { name: 'Fast Pitt' },
        rating: undefined,
      },
      {
        title: 'Bridget Phones',
        year: '2004',
        actorActress: { name: 'Rene Sellbetter' },
        rating: undefined,
      },
      {
        title: 'Black Stork Down',
        year: '2001',
        actorActress: { name: 'Ewan McResort' },
        rating: undefined,
      },
      {
        title: 'Defrosted',
        year: '2020',
        actorActress: { name: 'Irina Meshtale' },
        rating: undefined,
      },
    ];

    movies$.subscribe((movies: Movie[]) => {
      // console.log('test movies', movies);
      expect(movies).toEqual(expectedMovies);
      done();
    });
  });
});

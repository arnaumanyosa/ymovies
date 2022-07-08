import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from './../types';

@Pipe({
  name: 'movieFilter',
})
export class MovieListFilterPipe implements PipeTransform {
  transform(items: Movie[], filter: string) {
    if (!items || !filter) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().indexOf(filter) !== -1 ||
        item.actorActress.toLowerCase().indexOf(filter) !== -1
    );
  }
}

export interface Movie {
  title: string;
  year: string;
  actorActress: Person;
  rating: number | undefined;
}

export interface Person {
  name: string;
}

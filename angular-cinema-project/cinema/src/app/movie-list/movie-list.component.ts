import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getMovies(): void {}

  deleteMovie(id: number): any {
  //   return delete(MovieListComponent);
  // }
  }
}

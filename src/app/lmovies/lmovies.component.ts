import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-lmovies',
  templateUrl: './lmovies.component.html',
  styleUrls: ['./lmovies.component.css'],
})
export class LmoviesComponent implements OnInit {
  movies: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.moviesService.getMovies().subscribe((response)=>{
      console.log(response);
      this.movies = response;
    });
  }
  
}

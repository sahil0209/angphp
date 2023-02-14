import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-review-movie',
  templateUrl: './review-movie.component.html',
  styleUrls: ['./review-movie.component.css']
})
export class ReviewMovieComponent {
  id:any;
  message:any;

  constructor(private route:ActivatedRoute,private movieService:MoviesService){}

  ngOnInit() {
   this.id=this.route.snapshot.paramMap.get('id');
  }

  onSubmit(reviewForm:any)
  {
    let review=reviewForm.value;

    review.mid=Number(this.id);
    
    this.movieService.createReview(review).subscribe((response:any)=>{
      this.message=response.message;
      console.log(this.message);
    })
  }

}

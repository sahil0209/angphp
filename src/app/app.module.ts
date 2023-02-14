import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LmoviesComponent } from './lmovies/lmovies.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ReviewMovieComponent } from './review-movie/review-movie.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LmoviesComponent,
    NewsletterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BannerComponent,
    MovieListComponent,
    ReviewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

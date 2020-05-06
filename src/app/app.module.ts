import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { AvatarModule } from "ngx-avatar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MovieCardComponent } from "./component/movie-card/movie-card.component";
import { DisplayComponent } from "./component/display/display.component";
import { ShowMovieDetailsComponent } from "./component/show-movie-details/show-movie-details.component";
import { UpdateMovieDetailsComponent } from "./component/update-movie-details/update-movie-details.component";
import { AddNewActorComponent } from "./component/add-new-actor/add-new-actor.component";
import { LoginComponent } from "./component/login/login.component";
import { AddNewProducerComponent } from "./component/add-new-producer/add-new-producer.component";
import { RegistartionComponent } from "./component/registartion/registartion.component";
import { VerifyUserComponent } from "./component/verify-user/verify-user.component";
import { ForgotPasswordComponent } from "./component/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
import { AddPosterComponent } from "./component/add-poster/add-poster.component";
import { AddNewMoviesComponent } from "./component/add-new-movies/add-new-movies.component";
import { UpcomingMoviesComponent } from "./component/upcoming-movies/upcoming-movies.component";
import { TopRatedMoviesComponent } from './component/top-rated-movies/top-rated-movies.component';
import { BornTodayComponent } from './component/born-today/born-today.component';
import { WatchlistComponent } from './component/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    MovieCardComponent,
    DisplayComponent,
    ShowMovieDetailsComponent,
    UpdateMovieDetailsComponent,
    AddNewActorComponent,
    LoginComponent,
    AddNewProducerComponent,
    RegistartionComponent,
    VerifyUserComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AddPosterComponent,
    AddNewMoviesComponent,
    UpcomingMoviesComponent,
    TopRatedMoviesComponent,
    BornTodayComponent,
    WatchlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AvatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

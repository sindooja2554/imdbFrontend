import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { RegistartionComponent } from "./component/registartion/registartion.component";
import { ForgotPasswordComponent } from "./component/forgot-password/forgot-password.component";
import { VerifyUserComponent } from "./component/verify-user/verify-user.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MovieCardComponent } from "./component/movie-card/movie-card.component";
import { ShowMovieDetailsComponent } from "./component/show-movie-details/show-movie-details.component";
import { UpdateMovieDetailsComponent } from "./component/update-movie-details/update-movie-details.component";
import { AddNewActorComponent } from "./component/add-new-actor/add-new-actor.component";
import { AddNewProducerComponent } from "./component/add-new-producer/add-new-producer.component";
import { AddPosterComponent } from "./component/add-poster/add-poster.component";
import { AddNewMoviesComponent } from "./component/add-new-movies/add-new-movies.component";

const routes: Routes = [
  { path: "register", component: RegistartionComponent },
  { path: "verifyuser/:token", component: VerifyUserComponent },
  { path: "login", component: LoginComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  { path: "resetpassword/:token", component: ResetPasswordComponent },
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "home", component: ToolbarComponent },
      { path: "movie", component: MovieCardComponent },
      { path: "movie/:key", component: ShowMovieDetailsComponent },
      { path: "actor", component: AddNewActorComponent },
      { path: "producer", component: AddNewProducerComponent },
      { path: "poster", component: AddPosterComponent },
      { path: "addmovies", component: AddNewMoviesComponent },
    ],
  },
  { path: "updates", component: UpdateMovieDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

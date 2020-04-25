import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MovieCardComponent } from "./component/movie-card/movie-card.component"
import { ShowMovieDetailsComponent } from "./component/show-movie-details/show-movie-details.component"
import { UpdateMovieDetailsComponent } from "./component/update-movie-details/update-movie-details.component"

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "home", component: ToolbarComponent },
      { path: "movie", component: MovieCardComponent },
      { path: "movie/:key", component: ShowMovieDetailsComponent }
    ],
  },
  { path: "updates", component: UpdateMovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MovieCardComponent } from "../app/component/movie-card/movie-card.component"
import { ShowMovieDetailsComponent } from "../app/component/show-movie-details/show-movie-details.component"
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { DisplayComponent } from './component/display/display.component';
import { ShowMovieDetailsComponent } from './component/show-movie-details/show-movie-details.component';
import { UpdateMovieDetailsComponent } from './component/update-movie-details/update-movie-details.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ToolbarComponent, MovieCardComponent, DisplayComponent, ShowMovieDetailsComponent, UpdateMovieDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

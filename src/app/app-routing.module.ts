import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    children: [{ path: "home", component: ToolbarComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

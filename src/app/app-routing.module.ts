import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: "", redirectTo: "/home-page", pathMatch: "full"},
  {path: "home-page", component: HomePageComponent},
  {path: "results", component: ResultsComponent},
  {path: "**", redirectTo: "/home-page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

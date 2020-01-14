import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main.component";
import { DetailsComponent } from "./cart/details/details.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "details/:id/:name", component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}

//<!--routerLink="/app/cart" -->

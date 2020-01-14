import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminhomeComponent } from "./adminhome/adminhome.component";

const routes: Routes = [{ path: "", component: AdminhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}

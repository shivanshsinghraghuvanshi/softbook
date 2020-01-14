import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserworkspaceComponent } from "./userworkspace/userworkspace.component";

const routes: Routes = [{ path: "", component: UserworkspaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

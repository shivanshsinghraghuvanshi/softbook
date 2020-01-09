import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "browse", pathMatch: "full" },
  {
    path: "browse",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "error",
    loadChildren: () =>
      import("./exception/exception.module").then(m => m.ExceptionModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "**",
    redirectTo: "error",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

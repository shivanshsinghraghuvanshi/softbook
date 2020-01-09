import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "browse",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  { path: "", redirectTo: "browse", pathMatch: "full" },
  {
    path: "error",
    loadChildren: () =>
      import("./exception/exception.module").then(m => m.ExceptionModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  declarations: [AdminhomeComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}

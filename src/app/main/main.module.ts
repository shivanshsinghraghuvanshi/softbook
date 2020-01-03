import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { UserModule } from "../user/user.module";
import { NotificationModule } from "../notification/notification.module";
import { CartModule } from "../cart/cart.module";
import { AdminModule } from "../admin/admin.module";
import { UniversalModule } from "../universal/universal.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    UserModule,
    NotificationModule,
    CartModule,
    AdminModule,
    UniversalModule
  ]
})
export class MainModule {}

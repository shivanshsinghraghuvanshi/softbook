import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { UserModule } from "../user/user.module";
import { NotificationModule } from "../notification/notification.module";
import { CartModule } from "../cart/cart.module";
import { AdminModule } from "../admin/admin.module";
import { UniversalModule } from "../universal/universal.module";
import { HomepageComponent } from "./homepage/homepage.component";
import { ListComponent } from "./list/list.component";
import { CartComponent } from "./cart/cart.component";
import { PanelComponent } from "./panel/panel.component";
import { DataFormatDirective } from "./data-format.directive";
import { LifecycleComponent } from "./lifecycle/lifecycle.component";
import { DetailsComponent } from './cart/details/details.component';

@NgModule({
  declarations: [
    MainComponent,
    HomepageComponent,
    ListComponent,
    CartComponent,
    PanelComponent,
    DataFormatDirective,
    LifecycleComponent,
    DetailsComponent
  ],
  imports: [CommonModule, MainRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule {}

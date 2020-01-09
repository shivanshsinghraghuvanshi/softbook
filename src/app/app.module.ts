import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { NetflixInfoComponent } from './netflix-info/netflix-info.component';
import { ButtonPlayComponent } from './button-play/button-play.component';
import { ButtonMyListComponent } from './button-my-list/button-my-list.component';
import { ButtonMoreInfoComponent } from './button-more-info/button-more-info.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, NetflixInfoComponent, ButtonPlayComponent, ButtonMyListComponent, ButtonMoreInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UniversalModule } from "./universal/universal.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UniversalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

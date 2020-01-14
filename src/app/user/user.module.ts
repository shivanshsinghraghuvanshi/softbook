import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserContactFormComponent } from "./user-contact-form/user-contact-form.component";
import { UserRoutingModule } from "./user-routing.module";
import { UserworkspaceComponent } from "./userworkspace/userworkspace.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [UserContactFormComponent, UserworkspaceComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, HttpClientModule]
})
export class UserModule {}

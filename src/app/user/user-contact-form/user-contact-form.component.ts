import { Component, OnInit } from "@angular/core";

@Component({
  selector: "softbook-user-contact-form",
  templateUrl: "./user-contact-form.component.html",
  styleUrls: ["./user-contact-form.component.scss"]
})
export class UserContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  log(name: string) {
    console.log(name);
  }
}

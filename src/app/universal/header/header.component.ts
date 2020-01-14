import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/notification/notification.service";
import { OktaAuthService } from "@okta/okta-angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "softbook-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  unread: number = 0;
  _subscription: any;

  isAuthenticated: boolean;

  constructor(
    notificationService: NotificationService,
    public oktaAuth: OktaAuthService,
    private http: HttpClient
  ) {
    this._subscription = notificationService.notificationChange.subscribe(
      newCount => {
        this.unread = newCount;
      }
    );

    this.oktaAuth.$authenticationState.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    let token = await this.oktaAuth.getAccessToken();
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });
    // Make request
    this.http
      .get("http://localhost:5000/weatherforecast", { headers: headers })
      .subscribe(messages => {
        console.log(messages);
      });
  }
  login() {
    this.oktaAuth.loginRedirect("/user");
  }

  logout() {
    this.oktaAuth.logout("/");
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}

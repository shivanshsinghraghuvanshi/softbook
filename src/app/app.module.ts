import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UniversalModule } from "./universal/universal.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import {
  OktaAuthModule,
  OktaCallbackComponent,
  OKTA_CONFIG
} from "@okta/okta-angular";
import { OktaConfig } from "@okta/okta-angular/src/okta/models/okta.config";

//const for authentication

const authServerConfiguration: OktaConfig = {
  issuer: "https://dev-689116.okta.com/oauth2/default",
  redirectUri: "http://localhost:4200/implicit/callback",
  clientId: "0oaum90eL3HVuPwQo4x5",
  pkce: true
};

// firebase as oauthProvider
// const firebaseConfig = {
//   apiKey: "AIzaSyDpJXBNXecSrM7lZxzyDit-dikwWrEYUas",
//   authDomain: "zenoplatform.firebaseapp.com",
//   databaseURL: "https://zenoplatform.firebaseio.com",
//   projectId: "zenoplatform",
//   storageBucket: "zenoplatform.appspot.com",
//   messagingSenderId: "330316536952",
//   appId: "1:330316536952:web:1dd2ad9abd1ec418e1618d"
// };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UniversalModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule
    OktaAuthModule.initAuth(authServerConfiguration)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

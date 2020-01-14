import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";
import { OktaAuthService } from "@okta/okta-angular";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(
    // public afAuth: AngularFireAuth,
    private oktaAuth: OktaAuthService
  ) {
    this.getOktaAuthTOken().then(token => {
      console.log(token);
    });
  }

  // doGoogleLogin() {
  //   return new Promise<any>((resolve, reject) => {
  //     let provider = new firebase.auth.GoogleAuthProvider();
  //     provider.addScope("profile");
  //     provider.addScope("email");
  //     this.afAuth.auth.signInWithPopup(provider).then(res => {
  //       //console.log(res.user.getIdToken(false));
  //       resolve(res);
  //     });
  //   });
  // }

  getOktaAuthTOken() {
    return this.oktaAuth.getAccessToken();
    //console.log(token);
  }
}

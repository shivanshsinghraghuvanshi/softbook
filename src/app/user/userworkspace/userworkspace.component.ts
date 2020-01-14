import { Component, OnInit } from "@angular/core";
import { interval, fromEvent, Observable, noop } from "rxjs";
import { AuthenticationService } from "src/app/universal/services/authentication.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "softbook-userworkspace",
  templateUrl: "./userworkspace.component.html",
  styleUrls: ["./userworkspace.component.scss"]
})
export class UserworkspaceComponent implements OnInit {
  constructor(
    private authentication: AuthenticationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // document.addEventListener("click", event => {
    //   console.log(event);
    // });
    // let counter = 0;
    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000);
    // setTimeout(() => {
    //   console.log("end");
    // }, 3000);
    //Defination of stream
    //const interval$ = interval(1000); // <-- this is not actual stream of values but just a defination for stream of values| or how this stream will behave when we initiate
    // interval$.subscribe((value: number) => {
    //   // <-- stream is only created when we sibscribe to it
    //   console.log(value);
    // });
    // interval$.subscribe((value: number) => {
    //   // <-- stream is only created when we sibscribe to it
    //   console.log(value);
    // });
    // const click$ = fromEvent(document, "click");
    // click$.subscribe((e: MouseEvent) => {
    //   console.log(e.screenX + ":" + e.screenY);
    // });
    // Building our own API for http Observable
    // const myHttp$ = Observable.create(observer => {
    //   //<-- again this is just a defination of stream
    //   fetch("http://jsonplaceholder.typicode.com/users")
    //     .then((response: Response) => {
    //       return response.json();
    //     })
    //     .then(body => {
    //       observer.next(body);
    //       observer.complete();
    //     })
    //     .catch(error => {
    //       observer.error(error);
    //     });
    // });
    // myHttp$.subscribe(
    //   courses => {
    //     console.log(courses);
    //   },
    //   noop,
    //   () => console.log("finished")
    // );
  }

  login() {
    // this.authentication.doGoogleLogin().then(result => {
    //   let accessToken = result.credential.accessToken;
    //   const token = accessToken;
    //   this.http
    //     .get("http://localhost:58153/api/sample/protected", {
    //       headers: { authorization: `Bearer ${token}` }
    //     })
    //     .subscribe(res => {
    //       console.log(res);
    //     });
    // });
    // functional chaining into callbacks sometime creates a complex code we know as callback hell
    /**
     * Map Operator : Gives another Observable
     */
    /**
     * Building Compnents with Rxjs : show filter callback hells
     * Reactive Design
     * SharedReplay
     * tap
     */
  }
}

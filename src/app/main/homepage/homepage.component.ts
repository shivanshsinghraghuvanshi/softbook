import { Component, OnInit } from "@angular/core";
import { MovieService } from "./movie.service";
import { IResponse } from "../list/IResponse";
import { Subscription } from "rxjs";

@Component({
  selector: "softbook-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  movies: any[];
  counter: number = 0;
  myList: any[] = [];
  cart: boolean = false;
  list: boolean = true;
  _subcriber: Subscription;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.movies;
    this.myList = this.movieService.myList;
    this.counter = this.movieService.counter;
    this._subcriber = this.movieService.counterUpdate.subscribe(
      (value: number) => {
        this.counter = value;
      }
    );
  }
  showList() {
    this.list = true;
    this.cart = false;
  }
  showCart() {
    this.list = false;
    this.cart = true;
  }

  addToMyList(response: IResponse) {
    this.myList.push(response.movie);
    this.movieService.incrementCounter();
  }

  removeFromMyList(response: IResponse) {
    let index = this.myList.indexOf(response.movie);
    if (index > -1) {
      this.myList.splice(index, 1);
      this.movieService.decrementCounter();
    }
  }
  ngOnDestry() {
    this._subcriber.unsubscribe();
  }
}

interface movieDetails {
  name: string;
  release: Date;
  director: string;
  genre: GENRE;
}

enum GENRE {
  ACTION,
  ROMANCE,
  TRHILLER
}

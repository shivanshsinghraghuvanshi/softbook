import { Component, OnInit } from "@angular/core";
import { MovieService } from "./movie.service";
import { IResponse } from "../list/IResponse";

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
  constructor(movieService: MovieService) {
    this.movies = movieService.movies;
    this.myList = movieService.myList;
  }

  ngOnInit() {}
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
    this.counter = response.counter;
  }

  removeFromMyList(response: IResponse) {
    let index = this.myList.indexOf(response.movie);
    if (index > -1) {
      this.myList.splice(index, 1);
      this.counter = response.counter;
    }
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

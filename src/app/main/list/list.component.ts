import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MovieService } from "../homepage/movie.service";
import { IResponse } from "./IResponse";

@Component({
  selector: "softbook-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input("list") list: boolean = true;
  @Input("movies") movies: IMovie[] = [];
  //@Input("myList") myList: IMovie[] = [];
  @Input("counter") counter: number = 0;
  @Output("addToMyList") updateMyList = new EventEmitter<IResponse>();
  @Output("removeFromMyList") removeFromMyList = new EventEmitter<IResponse>();

  movieService: MovieService;
  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit() {}

  addToCart(movie) {
    if (!this.found(movie)) {
      this.updateMyList.emit({ movie: movie, counter: this.counter + 1 });
    }
  }

  removeFromCart(movie) {
    if (this.found(movie)) {
      this.removeFromMyList.emit({ movie: movie, counter: this.counter - 1 });
    }
  }

  private found(movie): boolean {
    let find: boolean = false;
    this.movieService.myList.forEach(item => {
      if (item.id === movie.id) find = true;
    });
    return find;
  }
}

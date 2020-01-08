import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { MovieService } from "../homepage/movie.service";
import { IResponse } from "../list/IResponse";

@Component({
  selector: "softbook-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  @Input("cart") cart: boolean = false;
  @Input("myList") myList: any[] = [];
  @Input("counter") counter: number = 0;
  @Output("removeFromMyList") removeFromMyList = new EventEmitter<IResponse>();

  movieService: MovieService;
  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  removeFromCart(movie) {
    if (this.found(movie)) {
      this.removeFromMyList.emit({ movie: movie, counter: this.counter - 1 });
    }
  }

  ngOnInit() {}

  private found(movie): boolean {
    let find: boolean = false;
    this.movieService.myList.forEach(item => {
      if (item.id === movie.id) find = true;
    });
    return find;
  }
}

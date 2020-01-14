import { Component, OnInit } from "@angular/core";
import { MovieService } from "./movie.service";
import { IResponse } from "../list/IResponse";
import { NotificationService } from 'src/app/notification/notification.service';

@Component({
  selector: "softbook-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  movies: any[];
  counter: number ;
  myList: any[] = [];
  cart: boolean = false;
  list: boolean = true;
  subscriber: any;

  constructor(private movieService: MovieService, private notificationservice: NotificationService) {
    this.movies = movieService.movies;
    this.myList = movieService.myList;
    this.counter = movieService.counter;
    this.subscriber = movieService.countChange.subscribe((newCount)=>{
      this.counter = newCount;
    })
  }

  ngOnInit() {
    
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
    this.notificationservice.updateMovie(response.movie.name,true);
    this.movieService.addCounter();
  }

  removeFromMyList(response: IResponse) {
    let index = this.myList.indexOf(response.movie);
    if (index > -1) {
      this.myList.splice(index, 1);
      this.movieService.reduceCounter();

    }
    this.notificationservice.updateMovie(response.movie.name,false);
  }
  ngOnDestry() {
    this.subscriber.unsubscribe();
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

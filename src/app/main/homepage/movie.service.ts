import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class MovieService {
  counter:number = 0;
  countChange: Subject<number> = new Subject<number>();

  private _myList: IMovie[] = [];
  public get myList(): IMovie[] {
    return this._myList;
  }
  public set myList(value: IMovie[]) {
    this._myList = value;
  }

  private _movies: IMovie[] = [
    {
      id: 1,
      name: "X-Men",
      isAdded: false,
      desc: "lorem epsum",
      star: "Jennifer Lawerance"
    },
    {
      id: 2,
      name: "Avengers",
      isAdded: false,
      desc: "lorem epsum",
      star: "Jennifer Lawerance"
    },
    {
      id: 3,
      name: "Spiderman",
      isAdded: false,
      desc: "lorem epsum",
      star: "Toby Maguire"
    },
    {
      id: 4,
      name: "Deadpool",
      isAdded: false,
      desc: "lorem epsum",
      star: "Ryan Renolds"
    },
    {
      id: 5,
      name: "Ant-man",
      isAdded: false,
      desc: "lorem epsum",
      star: "Paul Rudd"
    }
  ];
  public get movies() {
    return this._movies;
  }
  public set movies(value) {
    this._movies = value;
  }

  addCounter(){
    this.counter++;
    this.countChange.next(this.counter);
  };

  reduceCounter(){
    this.counter--;
    this.countChange.next(this.counter);
  };

  constructor() {}
}

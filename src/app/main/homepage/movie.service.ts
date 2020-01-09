import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private _counter: number = 0;
  private _counterUpdate: Subject<number> = new Subject<number>();
  public get counterUpdate(): Subject<number> {
    return this._counterUpdate;
  }
  public set counterUpdate(value: Subject<number>) {
    this._counterUpdate = value;
  }
  public get counter(): number {
    return this._counter;
  }

  incrementCounter(): void {
    this._counter++;
    this._counterUpdate.next(this._counter);
  }
  decrementCounter(): void {
    this._counter--;
    this._counterUpdate.next(this._counter);
  }
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
  constructor() {}
}

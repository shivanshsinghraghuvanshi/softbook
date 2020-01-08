import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  private _counter: number = 0;
  private _myList: IMovie[] = [];
  public get myList(): IMovie[] {
    return this._myList;
  }
  public set myList(value: IMovie[]) {
    this._myList = value;
  }

  private _movies: IMovie[] = [
    { id: 1, name: "X-Men", isAdded: false },
    { id: 2, name: "Avengers", isAdded: false },
    { id: 3, name: "Spiderman", isAdded: false },
    { id: 4, name: "Deadpool", isAdded: false },
    { id: 5, name: "Ant-man", isAdded: false }
  ];
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }
  public get movies() {
    return this._movies;
  }
  public set movies(value) {
    this._movies = value;
  }
  constructor() {}
}

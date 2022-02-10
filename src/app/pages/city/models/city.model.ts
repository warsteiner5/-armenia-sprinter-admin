import {ICity} from "../interfaces/city.interface";

export class City implements ICity {
  public _id: string;
  public name: string;

  constructor() {
    this._id = '';
    this.name = '';
  }
}

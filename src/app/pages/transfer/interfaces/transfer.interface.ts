import {IGroup} from "./group.interface";

export interface ITransfer {
  _id: string;
  from: string;
  to: string;
  route: string[];
  distance: number;
  duration: number;
  luggage: number;
  group: IGroup[];
}

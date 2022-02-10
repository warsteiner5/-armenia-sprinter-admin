import { Injectable } from '@angular/core';
import {BaseService} from "../../../core/base.service";
import {ICity} from "../interfaces/city.interface";
import {filter, Observable, Subject, switchMap, tap} from "rxjs";
import {City} from "../models/city.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private _controller = 'city';
  public currentCity: ICity = new City();
  public cities$: Subject<ICity[]> = new Subject<ICity[]>();

  constructor(private _baseService: BaseService) { }

  public getCityList(): Observable<ICity[]> {
    return this._baseService.getData<ICity[]>(this._controller).pipe(
      tap(cities => this.cities$.next(cities)));
  }

  public addCity(city: ICity): Observable<ICity[]> {
    return this._baseService.postData<ICity>(`${this._controller}`, city).pipe(
      switchMap(_ => this.getCityList())
    );
  }

  public updateCity(city: ICity): Observable<ICity[]> {
    return this._baseService.putData<ICity>(`${this._controller}/${city._id}`, city).pipe(
      filter(city => !!city._id),
      switchMap(_ => this.getCityList())
    );
  }

  public deleteCity(cityId: string): Observable<ICity[]> {
    return this._baseService.deleteData<string>(`${this._controller}/${cityId}`).pipe(
      switchMap(_ => this.getCityList())
    );
  }

}

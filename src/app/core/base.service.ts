import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private _httpClient: HttpClient) {
  }

  public getData<T>(url: string, queryParams?: any): Observable<T> {
    return this._httpClient.get<T>(environment.apiUrl + url, { params: queryParams });
  }

  public postData<T>(url: string, params?: any): Observable<T> {
    return this._httpClient.post<T>(environment.apiUrl + url, params);
  }

  public deleteData<T>(url: string, params?: any): Observable<T> {
    return this._httpClient.delete<T>(environment.apiUrl + url, { params: params });
  }

  public putData<T>(url: string, params?: any): Observable<T> {
    return this._httpClient.put<T>(environment.apiUrl + url, params);
  }
}

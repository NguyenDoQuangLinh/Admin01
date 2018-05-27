import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

export const ENDPOINT = {
  dashboardData: '../../../assets/json/dashboard.json',
};

@Injectable()
export class APIService {
  data: any;

  constructor(private _http: Http) { }

  getDashboard(url: string) {
    return this._http.get(url).map((res: Response) => res.json());
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpServ: HttpService) {}
  /**
   * @description : gt culture from asset/http
   * @param language :{language : string}
   * @returns : Observable<any>
   */
  getCulture(language = 'en-US'): Observable<any> {
    return this.httpServ.get(`assets/locale/${language}.json`);
  }
}

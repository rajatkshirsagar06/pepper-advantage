import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  /**
   * @description : Http get method
   * @param url :{url : string}
   * @param params :{params : any}
   * @returns : Observable<any>
   */
  get<T>(url: string, params?: any): Observable<any> {
    return this.httpClient
      .get(url, params)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  /**
   * @description : Http post method
   * @param url :{url : string}
   * @param body :{body : any}
   * @returns : Observable<any>
   */
  post(url: string, body: any = {}): Observable<any> {
    return this.httpClient
      .post(this.baseUrl + url, body)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  /**
   * @description : error handler
   */
  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    let message = error[key];
    if (response.status === 401) {
      // auth token delete
      //I redirect login page
    }
    if (error[key] instanceof Array) {
      message = error[key][0];
    }
    if (key === 'isTrusted') {
      // this will occur when not connected to internet
    } else {
      message = key + ' : ' + message;
      // call snackbar and show error with message
    }
    return throwError({ messages: message, error });
  }
}

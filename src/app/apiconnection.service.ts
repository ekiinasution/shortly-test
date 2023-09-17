import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectionService {

  opt:any
  url = "https://api.shrtco.de/v2/";

  constructor(private http: HttpClient) {}

  shortenLink(dataurl: any): Observable<any> {
    // console.log(dataurl)
    return this.http.post<any>(this.url + 'shorten?url=' + dataurl, this.opt);
  }

  // goShortens1(data: Data): Observable<Data> {
  //   return this.http.post<Data>(this.url, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('goShortens', data))
  //     );
  // }

  // goShortens2(data:any, options?: any): Observable<any> {
  //   return this.http.post(this.url + 'shorten', data, options)
  //     .pipe(
  //       catchError(this.handleError('addPershon', hero))
  //     );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

}


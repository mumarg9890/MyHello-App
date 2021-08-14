import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { observable, Observable, of, pipe, throwError } from 'rxjs';
import { CommonResponse } from '../common/commonResponse';
@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(private httpclient: HttpClient) {}

  GetPosts() {
    // return this.httpclient
    //   .get('https://jsonplaceholder111.typicode.com/posts')
    //   .pipe(
    //     map((val) => {
    //       return val;
    //     }),
    //     catchError((error: HttpErrorResponse) => {
    //       console.log(error.message);
    //       return of(error.message); //return from(['A','B','C'])
    //     })
    //   );

    return this.httpclient
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error.message);
          return of(error.message); //return from(['A','B','C'])
        })
      );
  }

  AuthenticateClient() {
    let authURL = 'https://stgmobile.tibchannels.com/identity/connect/token';
    let httpParams: HttpParams = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', 'mobapp')
      .set('client_secret', 'Tib_mobs34_Ch7annel')
      .set('scope', 'tibchannel');
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
    return this.httpclient
      .post<any>(authURL, httpParams, { headers: headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          debugger;
          alert(error.message);
          return of(error); //return from(['A','B','C'])
        })
      );
  }

  login() {
    let authURL = 'https://localhost:44304/api/user/login';
    let body = {
      userName: 'rafi23',
      password: 'Rafi1!',
    };
    return this.httpclient.post<any>(authURL, body).pipe(
      catchError((error: HttpErrorResponse) => {
        debugger;
        alert(error.message);
        return of(error); //return from(['A','B','C'])
      })
    );
  }
  getRequest<T>(url: string): Observable<CommonResponse<T>> {
    var responseObj = new CommonResponse<T>();
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
      observe: 'body',
    };
    return this.httpclient.get<T>(url, { headers: options.headers }).pipe(
      map((data: T) => {
        responseObj.Model = data;
        return responseObj;
      }),
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        responseObj.Error = error;
        responseObj.Model = undefined;
        if (error.status != 400) {
          return throwError(error);
        }
        return of(responseObj);
      })
    );
  }
  postRequest<T>(url: string, body?: any): Observable<CommonResponse<T>> {
    var responseObj = new CommonResponse<T>();
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    };
    return this.httpclient.post<T>(url, body).pipe(
      map((data: T) => {
        responseObj.Model = data;
        return responseObj;
      }),
      catchError((error: HttpErrorResponse) => {
        alert(error.message);
        responseObj.Error = error;
        responseObj.Model = undefined;
        if (error.status != 400) {
          return throwError(error);
        }
        return of(responseObj);
      })
    );
  }
}

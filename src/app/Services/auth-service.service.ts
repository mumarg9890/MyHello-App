import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  logIn(userDetails: any): boolean {
    if (userDetails.userName === 'admin' && userDetails.password === 'admin') {
      localStorage.setItem('isAuth', 'true');
      return true;
    } else {
      localStorage.setItem('isAuth', 'false');
      return false;
    }
  }
}

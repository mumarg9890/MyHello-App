import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutherService {
  constructor(private httpclient: HttpClient) {}
  private Authers: string[] = ['Auther1', 'Auther2', 'Auther3'];

  GetAuthers() {
    return this.Authers;
  }
}

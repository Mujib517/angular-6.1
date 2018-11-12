import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as jwt from 'angular-jwt';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    if (!localStorage.getItem("token")) return false;
    return true;
  }

  login(user: any): Observable<any> {
    return this.http.post('http://exp-rest-api.herokuapp.com/api/users/login', user);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem("token");
  }
}
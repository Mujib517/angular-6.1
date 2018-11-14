import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class UserService {

  isAuthenticated: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.isAuthenticated = new Subject<boolean>();
  }

  login(user: any): Observable<any> {
    return this.http.post('http://exp-rest-api.herokuapp.com/api/users/login', user);
  }

  saveToken(token) {
    localStorage.setItem('token', token);
    this.isAuthenticated.next(true);
  }

  logout() {
    localStorage.removeItem("token");
    this.isAuthenticated.next(false);
  }
}
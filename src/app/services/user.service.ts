import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { User } from "../models/user.model";

@Injectable()
export class UserService {

  isAuthenticated: Subject<boolean>;

  constructor(private http: HttpClient) {
    this.isAuthenticated = new Subject<boolean>();
  }

  login(user: User): Observable<User> {
    return this.http.post<User>('api/users/login', user);
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
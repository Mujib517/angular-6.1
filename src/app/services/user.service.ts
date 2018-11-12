import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post('http://exp-rest-api.herokuapp.com/api/users/login', user);
  }

  saveToken(token){
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem("token");
  }
}
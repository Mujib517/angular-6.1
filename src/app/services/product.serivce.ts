import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  //design pattern. Dependency injection
  constructor(private http: HttpClient) {
  }

  get(): Observable<any> {
    return this.http.get("http://exp-rest-api.herokuapp.com/api/products")
      .pipe(map(res => res["data"]));
  }
}
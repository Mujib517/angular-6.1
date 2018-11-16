import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class ProductInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = localStorage.getItem("token"); //truthy falsy
    var newReq = token ? req.clone({ setHeaders: { authorization: token } }) : req;
    return next.handle(newReq)
      .pipe(map(res => {
        return res;
      }), catchError(err => {
        console.log(err);
        if (err.status === 401) this.router.navigate(["/login"]);
        return Observable.throw(err);
      }));
  }
}
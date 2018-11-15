import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.serivce";

@Injectable()
export class ProductResolver implements Resolve<any> {

  constructor(private svc: ProductService) { }

  resolve(): Observable<any> {
    return this.svc.get();
  }
}
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable()
export class ProductService {

  reviews: any;
  //design pattern. Dependency injection
  constructor(private http: HttpClient) {
  }

  get(): Observable<IProduct[]> {
    var token = localStorage.getItem('token');
    var hdrs = { authorization: token };
    return this.http.get("http://exp-rest-api.herokuapp.com/api/products", { headers: hdrs })
      .pipe(map(res => res["data"]));
  }

  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>('http://exp-rest-api.herokuapp.com/api/products/' + id);
  }

  save(product: IProduct): Observable<any> {
    var frmData: FormData = new FormData();
    // frmData.append("brand",product.brand);
    // frmData.append("model",product.model);
    // frmData.append("price",product.price);
    // frmData.append("inStock",product.inStock);
    // frmData.append("img",product.img);
    for (var key in product) {
      frmData.append(key, product[key]);
    }
    return this.http.post('http://exp-rest-api.herokuapp.com/api/products', frmData, { headers: {} });
  }

  delete(id: string): Observable<any> {
    return this.http.delete('http://exp-rest-api.herokuapp.com/api/products/' + id);
  }
}
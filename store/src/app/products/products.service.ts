import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(limit: number) {
    return this.http.get<Product[]>(environment.apiUrl + `/products?limit=${limit}`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(environment.apiUrl + '/products/' + id);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(environment.apiUrl + '/products', product);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiCartUrl = `${environment.api}/cart`;
  private apiCheckoutUrl = `${environment.api}/checkout`;

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCartItens(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  cleanCart(): Observable<void> {
    return this.http.delete<void>(this.apiCartUrl)
  }

  checkout(products: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiCheckoutUrl, products);
  }

}

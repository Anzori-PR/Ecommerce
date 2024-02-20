import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { fetch } from '../fetch.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;
  urlCart: string;

  constructor(private httpClient: HttpClient) { 
    this.url = 'http://localhost:3000/products';
    this.urlCart = 'http://localhost:3000/cart';
  }

  getData() : Observable<fetch[]>{
    return this.httpClient.get<fetch[]>(this.url);
  }

  getComputers(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url).pipe(
      map(data => data.filter(item => item.category === 'Computers'))
    );
  }

  getHealth(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url).pipe(
      map(data => data.filter(item => item.category === 'Health & Fitness'))
    );
  }

  getElectronics(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url).pipe(
      map(data => data.filter(item => item.category === 'Electronics'))
    );
  }

  getHomeKitchen(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url).pipe(
      map(data => data.filter(item => item.category === 'Home & Kitchen'))
    );
  }

  getViewProduct(id: string): Observable<fetch> {
    return this.httpClient.get<fetch>(`${this.url}/${id}`);
  }

  addToCart(id: string): Observable<fetch> {
    return this.httpClient.post<fetch>(this.urlCart, {id});
  }

  getAddToCartData(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.urlCart);
  }

  getCartProducts(ids: string[]): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url).pipe(
      map(data => data.filter(item => ids.includes(item.id)))
    );
  }

  deleteCartItem(id: string): Observable<'id'> {
    return this.httpClient.delete<'id'>(`${this.urlCart}/${id}`);
  }

}

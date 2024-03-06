import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { fetch } from '../fetch.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;
  urlCart: string;

  public productCount = new BehaviorSubject<number>(0);

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/products'; // Your API link here
    this.urlCart = 'http://localhost:3000/cart'; // Your API link here for cart
  }

  getData(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.url);
  }

  getComputers(): Observable<fetch[]> {
    return this.getData().pipe(
      map(data => data.filter(item => item.category === 'Computers'))
    );
  }

  getHealth(): Observable<fetch[]> {
    return this.getData().pipe(
      map(data => data.filter(item => item.category === 'Health & Fitness'))
    );
  }

  getElectronics(): Observable<fetch[]> {
    return this.getData().pipe(
      map(data => data.filter(item => item.category === 'Electronics'))
    );
  }

  getHomeKitchen(): Observable<fetch[]> {
    return this.getData().pipe(
      map(data => data.filter(item => item.category === 'Home & Kitchen'))
    );
  }

  getViewProduct(id: string): Observable<fetch> {
    return this.httpClient.get<fetch>(`${this.url}/${id}`);
  }

  addToCart(id: string): Observable<any> {
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || '[]');
    cartItems.push(id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    this.productCount.next(cartItems.length);

    return of(null);
  }

  getAddToCartData(): Observable<fetch[]> {
    return this.httpClient.get<fetch[]>(this.urlCart);
  }

  getCartProducts(ids: string[]): Observable<fetch[]> {
    return this.getData().pipe(
      map(data => data.filter(item => ids.includes(item.id)))
    );
  }

  deleteCartItem(id: string): Observable<any> {
    let cartItems = JSON.parse(localStorage.getItem("cartItems") || '[]');
    const indexes = cartItems.reduce((acc: any[], itemId: string, index: any) => {
      if (itemId === id) {
        acc.push(index);
      }
      return acc;
    }, []);
  
    // Remove items at indexes in reverse order to avoid index shift
    indexes.reverse().forEach((index: any) => {
      cartItems.splice(index, 1);
    });
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
    // Emit a value to update the product count
    this.productCount.next(cartItems.length);
  
    // Return an observable with no data
    return of(null);
  }
  

}

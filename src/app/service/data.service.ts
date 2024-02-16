import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { fetch } from '../fetch.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor(private httpClient: HttpClient) { 
    this.url = 'http://localhost:3000/products';
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
}

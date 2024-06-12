import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http:HttpClient) { }

  // private apiUrl = 'https://localhost:7201/api/BasketItems';
  private apiUrl = 'https://localhost:7020/api/BasketItems';
  getBasketItems(): Observable<Basket[]> {
    return this.http.get<Basket[]>(this.apiUrl);
  }
  getbasketItem(id: number): Observable<void> {
    return this.http.get<void>(`${this.apiUrl}/${id}`);
  }

  getBasketItemByCustomerid(id: number): Observable<Basket> {
    return this.http.get<Basket>(`https://localhost:7020/api/BasketItems/GetBasketItemsByCustomerId/${id}`);
  }

  addBasketItem(book: Basket): Observable<Basket> {
    return this.http.post<Basket>(this.apiUrl, book);
  }


  deletebasketItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

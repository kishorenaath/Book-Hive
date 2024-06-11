import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService { 
  
// private apiUrl = 'https://localhost:7201/api/Trans'; 
private apiUrl = 'https://localhost:7020/api/Trans'; 

constructor(private http: HttpClient) { }

getOrders(): Observable<Order[]> {
  return this.http.get<Order[]>(this.apiUrl);
}

placeOrder(order: Order): Observable<Order> {
  return this.http.post<Order>(this.apiUrl, order);
}

updateOrder(id: number, order: Order): Observable<Order> {
  return this.http.put<Order>(`${this.apiUrl}/${id}`, order);
}
}

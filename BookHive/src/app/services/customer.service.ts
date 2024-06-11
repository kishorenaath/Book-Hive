import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private apiUrl = 'https://localhost:7201/api/Customers'; 
  private apiUrl = 'https://localhost:7020/api/Customers'; 


  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  addCustomer(book: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, book);
  }

  updateCustomer(id: number, book: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, book);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

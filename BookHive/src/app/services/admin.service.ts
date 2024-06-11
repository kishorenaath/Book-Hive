import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loggedin_User:any;
  
  // private apiUrl = 'https://localhost:7201/api/Administrators'; 
  private apiUrl = 'https://localhost:7020/api/Administrators'; 

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }


  getAdmin(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${id}`);
  }

  addAdmin(book: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, book);
  }

  updateAdmin(id: number, book: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/${id}`, book);
  }

  deleteAdmin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

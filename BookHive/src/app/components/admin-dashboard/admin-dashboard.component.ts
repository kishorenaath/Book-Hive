import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  cats: any[] = [];

  constructor(private bookService: BookService,private router:Router) { }

  gotoaddbook(){
    this.router.navigate(['admin/books']);
  }
  gotoHome(){
    this.router.navigate(['admin/add']);
  }
  gotoOrders(){
    this.router.navigate(['order']);
  }
  ngOnInit(): void {
    
    }
  
 
  }



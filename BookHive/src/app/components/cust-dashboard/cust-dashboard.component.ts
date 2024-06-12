import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-dashboard',
  templateUrl: './cust-dashboard.component.html',
  styleUrls: ['./cust-dashboard.component.css']
})
export class CustDashboardComponent implements OnInit {

  constructor(private router:Router) { }
  
  gotobasket(){
    this.router.navigate(['basket']);
  }
  gotoHome(){
    this.router.navigate(['books']);
  }
  logout(){
    localStorage.removeItem("currentuser");
    this.router.navigate(['login'])
  }
  ngOnInit(): void {
  }

}

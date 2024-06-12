import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit {

  allorders:any[]=[];
  constructor(private httporders:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.httporders.getOrders().subscribe((res)=>{
      this.allorders = res
    })
  }

  editorder(id:number){
    this.router.navigate(['admin/order/edit',id])
  }
}

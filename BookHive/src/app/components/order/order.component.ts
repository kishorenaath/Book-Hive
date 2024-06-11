import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  allorders:any[]=[];
  constructor(private httporders:OrderService) { }

  ngOnInit(): void {
    this.httporders.getOrders().subscribe((res)=>{
      this.allorders = res
    })
  }

}

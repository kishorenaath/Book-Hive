import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  loggedObj: any = {};
  cartItems: any[]= [];
  checkoutObj: any = {
    "DeliveryAddress1": "",
    "DeliveryAddress2": "",
    "DeliveryCity": "",
    "DeliveryPinCode": "",
    "DeliveryLandMark": ""
  }

  orderdet: any={
    transactionId: 0,
    customerId: 0,
    bookId: 0,
    orderDate: Date,
    deliveryAddress: "",
    status: "",
  }
  constructor(private httporder:OrderService,private router:Router) { }

  ngOnInit(): void {
    
  }

  placeOrder(){
    this.httporder.placeOrder(this.orderdet).subscribe((res)=>{
      console.log("Order placed")
      this.router.navigate(["order"])
    })
  }
}

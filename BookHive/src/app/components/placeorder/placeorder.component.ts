import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Basket } from 'src/app/models/basket.model';
import { BasketService } from 'src/app/services/basket.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  availability:any[]=["Chennai","Coimbatore","Tiruchy"]
  cartItem: any= {}
  Currentuser:any={}
  checkoutObj: any = {
    "DeliveryAddress1": "",
    "DeliveryAddress2": "",
    "DeliveryCity": "",
    "DeliveryPinCode": "",
    "DeliveryLandMark": ""
  }

  orderdet: any={
    customerId: 0,
    bookId: 0,
    orderDate: Date,
    deliveryAddress: "",
    status: "Not Delivered",
  }
  constructor(private httporder:OrderService,private httpbasket:BasketService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id')!;
    this.httpbasket.getbasketItem(id).subscribe((res) => {
      this.cartItem = res;
      this.orderdet.customerId= this.Currentuser.customerId;
      this.orderdet.bookId= this.cartItem.bookId;
      this.orderdet.orderDate= Date;
      this.orderdet.deliveryAddress = this.checkoutObj.DeliveryCity;
      this.orderdet.status= "Not Delivered";
      console.log(this.orderdet)
    });
    const localcust = localStorage.getItem("currentuser");
    if(localcust !=null){
      this.Currentuser=JSON.parse(localcust);
    }
  }

  placeOrder(){
    if(this.availability.includes( this.checkoutObj.DeliveryCity) ){
    console.log(this.checkoutObj.DeliveryPinCode)
    console.log(this.orderdet)
    this.httporder.placeOrder(this.orderdet).subscribe((res)=>{
      console.log(res)
     alert("Order Placed")
     
      this.router.navigate(['/home',this.orderdet.bookId]);
    })
    }else{
      alert("Sorry this book not available in your city")
    }
  }
}

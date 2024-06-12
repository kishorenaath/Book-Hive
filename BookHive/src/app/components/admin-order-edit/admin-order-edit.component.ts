import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-order-edit',
  templateUrl: './admin-order-edit.component.html',
  styleUrls: ['./admin-order-edit.component.css']
})
export class AdminOrderEditComponent implements OnInit {

  orderdet: any={
    customerId: "",
    bookId: "",
    orderDate: Date,
    deliveryAddress: "",
    status: "",
  }
  constructor(private httporder:OrderService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.httporder.getOrderById(id).subscribe((res) => {
      this.orderdet = res;
    });
  }

  save(){
    this.httporder.updateOrder(this.orderdet.transactionId,this.orderdet).subscribe({
      next:(res)=>{alert("status changed")
        this.router.navigate(['admin/orders'])
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Basket } from 'src/app/models/basket.model';
import { Book } from 'src/app/models/book.model';
import { BasketService } from 'src/app/services/basket.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  books: Book[] = [];
  cats:any[]=[]
  book:Book = new Book;
  cartitems:Basket[]=[]
  bookcat:any[]=this.cartitems;
  selectedCategory:string ="";
  Currentuser:any={}
  quantity:number=1;

  constructor(private bookService: BookService,private route:ActivatedRoute,private httpbasket:BasketService) { }

  getAllProductsByCateogry(cat:string){
    this.selectedCategory = cat;
    this.bookcat = this.cartitems.filter(x=>x.category == cat)
  }
  getall(){
    this.bookcat = this.cartitems;
  }

  loaddata(){
    this.httpbasket.getBasketItems().subscribe({
      next:(res)=>{this.cartitems = res.filter(x=>x.customerId==this.Currentuser.customerId)
      this.bookcat = this.cartitems;
      }
    })
  }

  ngOnInit(): void {
    this.loaddata();
    const localcust = localStorage.getItem("currentuser");
    if(localcust !=null){
      this.Currentuser=JSON.parse(localcust);
    }


   //localstorage approach
    // const local = localStorage.getItem("token")
    // if(local!=null){
    //   this.cartitems.push ( JSON.parse(local))
    // }
    // }
  
  }
  removeItem(id:number){

    if(confirm("Do you want to remove book from basket?")){
    this.httpbasket.deletebasketItem(id).subscribe({
      next:(response)=>{
        this.loaddata();
   },
   error:(err)=>{
     console.log(err);
   }
    })
}
  }
  
    increment(){
      console.log(this.cartitems[0].title)
      this.quantity++;
      console.log(this.cartitems)
     }
     decrement(){
       this.quantity--;
     }

}

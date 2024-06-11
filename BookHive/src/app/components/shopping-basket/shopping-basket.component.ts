import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {
  book: Book = new Book;
  quantity:number=1;
  cartitems:any[]=[]

  constructor(private bookService: BookService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.paramMap.get('id')!;
    // this.bookService.getBook(id).subscribe((book) => {
    //   this.book = book;
    // });
   
    const local = localStorage.getItem("token")
    if(local!=null){
      this.cartitems = JSON.parse(local)
    }
    }
  

  
    increment(){
      console.log(this.cartitems[0].title)
      this.quantity++;
     }
     decrement(){
       this.quantity--;
     }

}

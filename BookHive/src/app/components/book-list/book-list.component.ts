import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basket } from 'src/app/models/basket.model';
import { Book } from 'src/app/models/book.model';
import { BasketService } from 'src/app/services/basket.service';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  cats:any[]=[]
  book:Book = new Book;
  bookcat:Book[]=this.books;
  selectedCategory:string ="All";
  cartitems:any[]=[];
  loggeduser:any={}
  BasketItem:Basket={
    basketId:0,
    customerId: 1,
    bookId: 0,
    title: "",
    author: "",
    description: "",
    category: "",
    price: 0,
    imgUrl: ""
  }

  constructor(private bookService: BookService,private router:Router,private httpbasket:BasketService) { }

  distinctcat(){
    for(var i in this.books){
      if(this.cats.includes(this.books[i].category)){
        console.log("ulla illa")
      }else(
        this.cats.push(this.books[i].category)
      )
    }
  }
 
  getAllProductsByCateogry(cat:string){
    this.selectedCategory = cat;
    this.bookcat = this.books.filter(x=>x.category == cat)
  }

  getall(){
    this.bookcat = this.books;

  }


  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    this.bookcat = this.books;
    } );
    const localcust = localStorage.getItem("currentuser");
     if(localcust !=null){
     this.loggeduser=JSON.parse(localcust);
     }
  }


  addtocart(id:number){
    console.log(this.cats)
    this.bookService.getBook(id).subscribe((book) => {
     this.book = book;
     });

     this.BasketItem.customerId = this.loggeduser.customerId;
     this.BasketItem.bookId=this.book.bookId;
     this.BasketItem.title = this.book.title;
     this.BasketItem.author = this.book.author;
     this.BasketItem.description = this.book.description;
     this.BasketItem.category = this.book.category;
     this.BasketItem.price = this.book.price;
     this.BasketItem.imgUrl = this.book.imgUrl;
     console.log(this.BasketItem.customerId)

     this.httpbasket.addBasketItem(this.BasketItem).subscribe({
      next:(response)=>{
        console.log("Added to Cart")
        this.router.navigate(['basket'])
      }, 
     })

    //localstorage approach
    // this.bookService.getBook(id).subscribe((book) => {
    // this.cartitems.push(book);
    // console.log(this.cartitems[0].title)
    // });
    // localStorage.setItem("token",JSON.stringify(this.cartitems));
    // this.router.navigate(['basket'])
  }
}

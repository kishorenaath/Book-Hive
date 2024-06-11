import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  bookcat:Book[]=this.books;
  selectedCategory:string ="";
  cartitems:any[]=[];

  constructor(private bookService: BookService,private router:Router) { }

 
  getAllProductsByCateogry(cat:string){
    this.bookcat = this.books.filter(x=>x.category == cat)
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    this.bookcat = this.books;
    }
  
  );
  }
  addtocart(id:number){
    this.bookService.getBook(id).subscribe((book) => {
    this.cartitems.push(book);
    console.log(this.cartitems[0].title)
    });
    localStorage.setItem("token",JSON.stringify(this.cartitems));
    this.router.navigate(['basket'])
  }
}

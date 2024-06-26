import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-add',
  templateUrl: './admin-book-add.component.html',
  styleUrls: ['./admin-book-add.component.css']
})
export class AdminBookAddComponent implements OnInit {

  loggeduser:any={}
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  loaddata(){
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    })
  
  }
  ngOnInit(): void {
    this.loaddata();
    const localcust = localStorage.getItem("currentuser");
    if(localcust !=null){
    this.loggeduser=JSON.parse(localcust);
    }
    }

  

  deleteBook(bookid:number){
    if(confirm("Do you want to delete book from inventory?")){
    this.bookService.deleteBook(bookid).subscribe({
      next:(response)=>{
           this.loaddata();
      },
      error:(err)=>{
        console.log(err);
      }
    })
}
 }
}

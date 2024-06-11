import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-add',
  templateUrl: './admin-book-add.component.html',
  styleUrls: ['./admin-book-add.component.css']
})
export class AdminBookAddComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  loaddata(){
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    })
  
  }
  ngOnInit(): void {
    this.loaddata();
    }

  

  deleteBook(bookid:number){
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
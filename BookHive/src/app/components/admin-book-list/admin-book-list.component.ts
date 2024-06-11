import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  constructor(private httpbook:BookService, private router:Router) { }

  ngOnInit(): void {
  }

  addBook(myForm:any){
    
    let newBook:Book={
      bookId: 0,
      title: myForm.value.BookName,
      author: myForm.value.Author ,
      description: myForm.value.Description,
      category: myForm.value.BookCat,
      price: myForm.value.price,
      imgUrl: myForm.value.imgurl
    }
    this.httpbook.addBook(newBook).subscribe({
     next:(response)=>{this.router.navigate(['books'])},
     error:(err)=>{console.log(err)
      console.log(myForm.value.BookName,myForm.value.Author,myForm.value.Description,myForm.value.BookCat,myForm.value.price,myForm.value.ImgUrl )
     }
   })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fetchedBook:Book={
    bookId:0 ,
    title:"abc",
    author: "" ,
    description: "",
    category: "",
    price: 0,
    imgUrl: ""

  }
  imgpath="assets/fireworks.jpeg"
  constructor(private router:Router,private httpbook:BookService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.httpbook.getBook(id).subscribe((book) => {
      this.fetchedBook = book;
    });
  }

  gotoHome(){
    this.router.navigate(['books']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-edit',
  templateUrl: './admin-book-edit.component.html',
  styleUrls: ['./admin-book-edit.component.css']
})
export class AdminBookEditComponent implements OnInit {

  fetchedBook:Book={
    bookId:0 ,
    title:"abc",
    author: "" ,
    description: "",
    category: "",
    price: 0,
    imgUrl: ""

  }
  constructor(private httpbook:BookService, private router:Router,private activatedRoute:ActivatedRoute) { }


   ngOnInit(): void {

    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.httpbook.getBook(id).subscribe((book) => {
      this.fetchedBook = book;
    });
      
      }
      
      
      save(){
    console.log(this.fetchedBook.title)
    console.log(this.fetchedBook.title)
    this.httpbook.updateBook(this.fetchedBook.bookId,this.fetchedBook).subscribe({
      next:(response)=>{this.router.navigate(['admin/add'])},
       error:(err)=>{console.log(err) }
     })
  }
}


    
    //     this.myReactiveForm.setValue({
    //       rsId:this.fetchedBook.bookId,
    //       rsName:this.fetchedBook.title,
    //       rsauthor:this.fetchedBook.author ,
    //       rsdescription:this.fetchedBook.description,
    //       rscategory:this.fetchedBook.category,
    //       rsprice:this.fetchedBook.price,
    //       rsimgurl: this.fetchedBook.imgUrl
    //     })
    //   },
    //   error:(err: any)=>console.log(err)
    // })
    // }

    
    
  //   let newBook:Book={
  //     bookId: 0,
  //     title: myReactiveForm.value.rsName,
  //     author: myReactiveForm.value.rsauthor ,
  //     description: myReactiveForm.value.rsdescription,
  //     category: myReactiveForm.value.rsdescription,
  //     price: this.myReactiveForm.value.rsprice,
  //     imgUrl: this.myReactiveForm.value.rsimgurl
  //   }
  //   this.httpbook.updateBook(this.fetchedBook.bookId,newBook).subscribe({
  //    next:(response)=>{this.router.navigate(['books'])},
  //    error:(err)=>{console.log(err)
  //    // console.log(myForm.value.BookName,myForm.value.Author,myForm.value.Description,myForm.value.BookCat,myForm.value.price,myForm.value.ImgUrl )
  //    }
  //  })
  //  }
//}




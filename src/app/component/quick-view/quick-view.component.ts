import { Component, OnInit } from '@angular/core';
import {Input, ViewChild, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})

export class QuickViewComponent implements OnInit {

token:any;
bookId: any;
bookData: any;

    constructor( private bookService: BookService,private router: Router) {
      
     }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    this.bookId = localStorage.getItem("bookId")
    this.getBookWithId() 
  }

  getBookWithId() { 
    this.bookService.GetAllBooks().subscribe((response: any) => {
      response.data.forEach((element: any) => {
        console.log(element)
        if (element._id == this.bookId) {
          this.bookData = element;
      }
    });
  })
  }

  /* getAllBooks() {
    this.bookService.GetAllBooks().subscribe((response: any) => {
      console.log(response);
      this.Booklist = response.data
      this.countBooks = response.data.length
    })
  } */

  addToWishList(){
    let data = {
      BookID: this.bookId
    }
    console.log("added to wishlist")
    this.bookService.AddingToWishList(data).subscribe((response:any) =>{
      console.log(response)
    })
    //this.router.navigateByUrl('/Dashboards/WishList') */
  }

  addToCartList(){
    let data = {
      BookId: this.bookId
    }
    console.log("added to cartlist")
    /* this.bookService.AddingToCartList(data,this.token).subscribe((response:any) =>{
      console.log(response)
    })
    this.router.navigateByUrl('/Dashboards/CartList') */
  }
}

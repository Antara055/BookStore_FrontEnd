import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  Booklist: any;
  countBooks: any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks() {
    this.bookService.GetAllBooks().subscribe((response: any) => {
      console.log(response);
      this.Booklist = response.data
      this.countBooks = response.data.length
    })
  }

  lowTohigh() {
    this.bookService.lowTohigh().subscribe((response: any) => {
      console.log(response);
      this.Booklist = response.data
      this.countBooks = response.data.length
    })
  }
  
  highTolow() {
    this.bookService.highTolow().subscribe((response: any) => {
      console.log(response);
      this.Booklist = response.data
      this.countBooks = response.data.length
    })
  }
  

  newArrivals() {
    this.bookService. newArrivals().subscribe((response: any) => {
      console.log(response);
      this.Booklist = response.data
      this.countBooks = response.data.length
    })
  }
}    

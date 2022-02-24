import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;

  constructor(private httpService:HttpService) { }

  GetAllBooks(){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/books/',true,header)
  }

  newArrivals(){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/books/newArr',true,header)
  }

  highTolow(){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/books/priceHtoL',true,header)
  }

  lowTohigh(){
    this.token=localStorage.getItem('token')
    let header = {
      headers:new HttpHeaders({
        'token':this.token
      })
    }
    return this.httpService.getService('/books/priceLtoH',true,header)
  }
  
}

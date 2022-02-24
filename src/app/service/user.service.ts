import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpService:HttpService) {}
  registration(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/users/registrationUser',reqdata,false,header)
  }
  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('/users/login',reqdata,false,header)
  }
}

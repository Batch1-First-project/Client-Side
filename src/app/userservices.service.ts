import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reguser } from './reguser';
@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  url=""
  constructor(
    private http:HttpClient
  ) { }
  enroll(user:Reguser){
   return  this.http.post<any>(this.url,user);

  }
}

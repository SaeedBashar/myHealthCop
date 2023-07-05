import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserManagementData(cb:any){
    
    this.http.get('http://localhost:3000/user-management')
    .subscribe(res=>{
      cb(res)
    });
  }

  getRegisteredUserData(cb){
    this.http.get('http://localhost:3000/registered-users')
    .subscribe(res=>{
      cb(res)
    })
  }

}

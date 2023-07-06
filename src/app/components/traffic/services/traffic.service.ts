import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getTrafficData(cb){
    this.http.get(this.url + '/traffic')
    .subscribe(res=>cb(res))
  }

  getActiveUsers(cb){
    this.http.get(this.url + '/active-users')
    .subscribe(res=>cb(res))
  }
}

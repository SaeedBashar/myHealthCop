import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getTopIncomeData(cb){
    this.http.get(this.url + '/top-income')
    .subscribe(res=>cb(res))
  }

  getCashflow(cb){
    this.http.get(this.url + '/cashflow')
    .subscribe(res=>cb(res))
  }
}

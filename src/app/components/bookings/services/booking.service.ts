import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getActiveEntitiesData(cb){
    this.http.get(this.url + '/active-entities')
    .subscribe(res=>{
      cb(res)
    })
  }

  getBookingData(cb){
    this.http.get(this.url + '/bookings')
    .subscribe(res=>{
      cb(res)
    })
  }

  getTopBookingsData(cb){
    this.http.get(this.url + '/top-bookings')
    .subscribe(res=>{
      cb(res)
    })
  }

  getSportCategories(cb){
    this.http.get(this.url + '/sport-categories')
    .subscribe(res=>cb(res))
  }

  getSportPlaces(cb){
    this.http.get(this.url + '/sport-places')
    .subscribe(res=>cb(res))
  }

  getProfessionData(cb){
    this.http.get(this.url + '/professionals')
    .subscribe(res=>cb(res))
  }
}

import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { TopBookingType } from './top-bookings.type';

@Component({
  selector: 'app-top-bookings',
  templateUrl: './top-bookings.component.html',
  styleUrls: ['./top-bookings.component.css']
})
export class TopBookingsComponent {
  
  entities : TopBookingType[];
  currentEntity : string = 'programs';
  currentTableData: any;
  
  constructor(private bookingService : BookingService){
    bookingService.getTopBookingsData((data: TopBookingType[])=>{
      this.entities = data;
      let init = data.find(d=>d.entity == this.currentEntity)
      this.currentTableData = init?.data;
    })
  }

  changeEntity(current){
    if(current !== this.currentEntity){
      let obj = this.entities.find(d=>d.entity === current);
      this.currentEntity = current;
      this.currentTableData = obj?.data;
      console.log(this.currentTableData)
    }
  }

}

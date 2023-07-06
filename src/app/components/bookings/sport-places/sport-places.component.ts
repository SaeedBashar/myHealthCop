import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-sport-places',
  templateUrl: './sport-places.component.html',
  styleUrls: ['./sport-places.component.css']
})
export class SportPlacesComponent {

  data :any[]= [];
  constructor(private sportServices: BookingService){
    sportServices.getSportPlaces(data=>{
      this.data = data
    })
  }
}

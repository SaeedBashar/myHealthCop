import { Component } from "@angular/core";
import { BookingService } from '../services/booking.service';
import { ProfessionType } from "./profession.type";

@Component({
  selector: 'app-top-professionals',
  templateUrl: './top-professionals.component.html',
  styleUrls: ['./top-professionals.component.css']
})
export class TopProfessionalsComponent {
  data :ProfessionType[]= [];
  currentData: any[];
  currentProfession = "Doctor"
  constructor(private services: BookingService){
    services.getProfessionData(data=>{
      this.data = data
      let obj = data.find(x=>x.profession == this.currentProfession)
      this.initiliazeTable(obj)
    })
  }

  changeProfession(arg){
    console.log(arg)
    if(arg !== this.currentProfession){
      let obj = this.data.find(x=>x.profession == arg)
      this.initiliazeTable(obj)
    }
  }

  initiliazeTable(obj:any){
    this.currentData = obj.data;
    this.currentProfession = obj.profession;
  }
}

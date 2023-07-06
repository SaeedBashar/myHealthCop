import { Component } from '@angular/core';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-top-income',
  templateUrl: './top-income.component.html',
  styleUrls: ['./top-income.component.css']
})
export class TopIncomeComponent {

  data:any;
  currentProfession = "Nutrition Specialists";
  currentData: any;

  constructor(private services : FinanceService){
    services.getTopIncomeData(data=>{
      this.data = data;
      let obj = data.find(x=>x.profession == this.currentProfession)
      this.initiliazeTableData(obj)
      console.log(data)
    })
  }

  changeProfession(arg){
    if(arg !== this.currentProfession){
      let obj = this.data.find(x=>x.profession == arg)
      this.initiliazeTableData(obj)
    }
  }

  initiliazeTableData(obj){
    this.currentProfession = obj.profession;
    this.currentData = obj.data;
  }
}

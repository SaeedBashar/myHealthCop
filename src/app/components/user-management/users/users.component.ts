import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title: object
  totalUsers :number;
  series: number[];
  chart : any;
  labels : string[];

  constructor(private userService: UserService){
    
  }
  ngOnInit(){
    
    this.userService.getUserManagementData((res)=>{
      this.initializeChart(res.users);
    })

  }

  initializeChart(data){

    let series = data.map((u)=>u.total);
    this.totalUsers = series.reduce((t, n)=>n+t);

    let labels = data.map((u)=>u.status)
    this.title = {
      text: `Total User : ${this.totalUsers}`
    }
    this.series = series
    this.labels = labels
    this.chart = {
      height: 200,
      type: 'pie',
      toolbar: {
        show: true
      }
    }
    
  }
}

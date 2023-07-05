import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { UserService } from "../services/user.service";
import { RegisteredUserType } from "./registered-users.type";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;
  componentData : RegisteredUserType[] = [];
  current: RegisteredUserType | undefined;
  title:any;
  weekNo = 1;
  weeklyChange = 'up';

  constructor(private userService: UserService) {
    this.userService.getRegisteredUserData((data)=>{
      this.componentData = data;
      this.weekNo = this.componentData[0].weekNo;
      this.intializeChart(this.componentData[0])
    })
  }

  changeWeek(weekNo, el:HTMLButtonElement){
    
    if(weekNo !== this.weekNo){
      // this.checkChange(weekNo, el);
      this.weekNo = weekNo;
      this.current = this.componentData.find(d=>d.weekNo === weekNo);
      this.intializeChart(this.current);
    }
  }

  // checkChange(weekNo, el:HTMLButtonElement){

  //   if(weekNo == 1){
  //     this.weeklyChange= 'up';
  //     return
  //   };
  //   // this.assignColor(el, 'up')

  //   let prevWeek = this.componentData[weekNo - 2].users.reduce((t, u)=>t+u)
  //   let nextWeek = this.componentData[weekNo-1].users.reduce((t, u)=>t+u)

  //   if(prevWeek > nextWeek) 
  //     this.weeklyChange= 'down';
  //   else 
  //     this.weeklyChange= 'up';

  // }

  // assignColor(el, arg){
  //   let items = el.closest('section')?.getElementsByTagName('foreignObject')
  //   let item = items ? items[1].nextSibling: null
  //   if(item){
  //     // console.log(item)
  //     this.weekNo = this.weekNo
  //     item.setAttribute('fill', 'red')
  //   }
  //   console.log('done')
  // }

  intializeChart(data){ 

    let total = data.users.reduce((t, u)=>t+u)
    this.title =`Total Users : ${total}`;

    let series = data.users;
    let labels = data.dates;

    this.chartOptions = {
      series: [
        {
          name: "Registered Users",
          data: series
        }
      ],
      chart: {
        type: "area",
        height: 200,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: this.title,
        align: "left"
      },
      subtitle: {
        text: "User Registration",
        align: "left"
      },
      labels: labels,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }
}
  
  


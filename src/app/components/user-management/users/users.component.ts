import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { UserService } from '../services/user.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  totalUsers = 0;
  title :any;

  constructor(private userService: UserService){
    this.userService.getUserManagementData((res)=>{
      this.initializeChart(res.users);
    })
  }
 
  initializeChart(data){
    let series = data.map((u)=>u.total);
    this.totalUsers = series.reduce((t, n)=>n+t);

    this.title = {
      text: `Total User : ${this.totalUsers}`
    }
    
    let labels = data.map((u)=>u.status)

    this.chartOptions = {
      series: series,
      chart: {
        height: 200,
        type: "pie"
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    // let series = data.map((u)=>u.total);
    // this.totalUsers = series.reduce((t, n)=>n+t);

    // let labels = data.map((u)=>u.status)
    // this.title = {
    //   text: `Total User : ${this.totalUsers}`
    // }
    // this.series = series
    // this.labels = labels
    // this.chart = {
    //   height: 200,
    //   type: 'pie',
    //   toolbar: {
    //     show: true
    //   }
    // }
    
  }
}

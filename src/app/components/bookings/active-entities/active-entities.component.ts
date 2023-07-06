import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { UserService } from '../../user-management/services/user.service';
import { BookingService } from '../services/booking.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-active-entities',
  templateUrl: './active-entities.component.html',
  styleUrls: ['./active-entities.component.css']
})
export class ActiveEntitiesComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  totalUsers = 0;
  title :any;

  constructor(private bookingService: BookingService){
    this.bookingService.getActiveEntitiesData((data:any)=>{
      this.initializeChart(data)
    })
  }
 
  initializeChart(data){
    console.log(data)
    let series = data.map((u)=>u.total);
    this.totalUsers = series.reduce((t, n)=>n+t);

    this.title = {
      text: `Total Active Entities : ${this.totalUsers}`
    }
    
    let labels = data.map((u)=>u.entity)

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
    
  }
}

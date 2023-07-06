import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { TrafficService } from '../services/traffic.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-active-visitors',
  templateUrl: './active-visitors.component.html',
  styleUrls: ['./active-visitors.component.css']
})
export class ActiveVisitorsComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  totalUsers = 0;
  title :any;

  constructor(private service: TrafficService){
    this.service.getActiveUsers((data:any)=>{
      this.initializeChart(data)
    })
  }
 
  initializeChart(data){
    let series = data.map((u)=>u.total);
    this.totalUsers = series.reduce((t, n)=>n+t);

    this.title = {
      text: `Total Active Visitors : ${this.totalUsers}`
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

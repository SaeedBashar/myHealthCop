import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";
import { BookingService } from '../services/booking.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-sport-categories',
  templateUrl: './sport-categories.component.html',
  styleUrls: ['./sport-categories.component.css']
})
export class SportCategoriesComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private sportServices: BookingService) {
    sportServices.getSportCategories(data=>{
      this.initiliazeChart(data)
    })
  }

  initiliazeChart(data){
    let series = data.map(x=>x.total)
    let labels= data.map(x=>x.name)
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: series
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: labels
      }
    };
  }
}

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
import { RegisteredUserType } from "../../user-management/registered-users/registered-users.type";
import { UserService } from "../../user-management/services/user.service";
import { FinanceService } from "../services/finance.service";

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
}

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.css']
})
export class CashflowComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;
  componentData : RegisteredUserType[] = [];
  current: RegisteredUserType | undefined;
  title:any;
  weekNo = 1;
  weeklyChange = 'up';

  constructor(private service: FinanceService) {
    this.service.getCashflow((data)=>{
      this.componentData = data;
      this.weekNo = data[0].weekNo;
      this.intializeChart(data[0])
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

  intializeChart(data){ 

    let revtotal = data.revenue.reduce((t, u)=>t+u)
    let exptotal = data.expenses.reduce((t, u)=>t+u)
    this.title =`Total Revenue : ${revtotal} | Total Expenses ${exptotal}`;

    let series1 = data.revenue;
    let series2 = data.expenses;
    let labels = data.dates;

    this.chartOptions = {
      series: [
        {
          name: "Revenue",
          data: series1
        },
        {
          name: "Expenses",
          data: series2
        }
      ],
      chart: {
        type: "area",
        height: 250,
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
        text: "Cash Flow",
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

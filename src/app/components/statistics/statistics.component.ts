import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  data: any;

  constructor(private http: HttpClient){
    http.get('http://localhost:3000/statistics')
    .subscribe(res=>{
      this.data = res;
      console.log(res)
    })
  }
}

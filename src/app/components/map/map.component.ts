import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  data:any

  constructor(private http: HttpClient){
    http.get("http://localhost:3000/regions")
    .subscribe(res=>{
      this.data= res
      console.log(res)
    })
  }

  setCurrent(arg){
    
  }
}

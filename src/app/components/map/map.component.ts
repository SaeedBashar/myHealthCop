import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  data:any
  current :any = document.getElementById('path3019')
  constructor(private http: HttpClient){
    http.get("http://localhost:3000/regions")
    .subscribe(res=>{
      this.data= res
      console.log(res)
    })
  }

  setCurrent(arg){
    let items = document.getElementsByTagName("path")
    for(let i=0; i<items.length; i++){
      items[i].style.stroke = '#ffffff';
      items[i].style.strokeWidth = '3';
    }
    
    arg.style.stroke = "red";
    arg.style.strokeWidth = '5'
  }
}

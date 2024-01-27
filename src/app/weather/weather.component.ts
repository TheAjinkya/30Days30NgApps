import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

  weatherData!: any
  localTime:any

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(res=>{
      console.log("weatherService.getData", res)
      this.weatherData = res
    })
  }

  checkWeather(location:string){
    this.weatherService.getData(location).subscribe(res=>{
      console.log("weatherService.getData", res)
      this.weatherData = res
      this.localTime = new Date(this.weatherData.dt)
    })
  }

}

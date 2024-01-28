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
  currentTemp:any
  feels_like:any
  minTemp:any
  maxTemp:any
  today: number = Date.now();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(res=>{
      console.log("weatherService.getData", res)
      this.weatherData = res
      this.setAllData(res)
    })
  }

  checkWeather(location:string){
    this.weatherService.getData(location).subscribe((res:any)=>{
      console.log("weatherService.getData", res)
      this.weatherData = res
      this.setAllData(res)    
    })
  }

  changeLocation(location:any){
    this.checkWeather(location)
  }

  setAllData(allWeather:any){
    this.localTime = new Date(allWeather.dt)
      this.currentTemp = this.kelvinToCelcius(allWeather.main.temp)
      this.feels_like = this.kelvinToCelcius(allWeather.main.feels_like)
      this.maxTemp = this.kelvinToCelcius(allWeather.main.temp_max)
      this.minTemp = this.kelvinToCelcius(allWeather.main.temp_min)
      
      console.log(this.localTime)
  }

  kelvinToCelcius(temp:any){
    return Math.round(temp -273)
  }

}

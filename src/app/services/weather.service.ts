import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class WeatherService {

  APIUrl: string = "https://api.openweathermap.org/data/2.5/weather?"
  
  APIKey:string = "appid=ada6a287c7a3ea49ee2c4016583e8b5d"
  
  constructor(private http: HttpClient) {
    this.initGetData()
  }

  private subject = new BehaviorSubject<any>([]);

  getUpdatedWeather = this.subject.asObservable();

  getData(cityName='london') {
    return this.http.get(`${this.APIUrl}q=${cityName}&${this.APIKey}`);
  }

  private initGetData() {
    this.getData().subscribe((res) => {
      console.log("res", res)
      this.subject.next(res)
      return res;
    });
  }
}

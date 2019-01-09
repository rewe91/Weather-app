import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { City } from './city';

@Injectable()
export class WeatherService {

  private API_KEY = '5fd5baa6f6d036a39ff389e7d0f40ec4';
  private API_URL = 'http://api.openweathermap.org/data/2.5/';

  constructor(private jsonp: Jsonp, private http: Http) {}

  private citySort(a, b) {
    if (a.nm < b.nm) {
      return -1;
    } else if (a.nm > b.nm) {
      return 1;
    } else {
      return 0;
    }
  }
  // skapar en get funktioner för forecast cities och currentweather skapar hour som som skall publicera informationen till forcasten

  

  getCurrentWeather(id: string): Promise<Object> {
    let url = `${this.API_URL}weather?id=${id}&appid=${this.API_KEY}&callback=JSONP_CALLBACK`;
    let promise = this.jsonp.request(url).toPromise();
    return promise.then(response => response.json());
  }
  getCities(query: string): Promise<Object[]> {
    let url = "/assets/data/city_list.json";
    let promise = this.http.get(url).toPromise();
    return promise.then(response => JSON.parse(response.text()))
    .then(data => data.filter(city =>
     city.nm.toLowerCase().startsWith(query.toLowerCase())).sort(this.citySort) as Object[]);
  }


  getForeCast(id: string): Promise<Object>{
    let url = `${this.API_URL}forecast?id=${id}&appid=${this.API_KEY}&callback=JSONP_CALLBACK`;
    let promise = this.jsonp.request(url).toPromise();
    return promise.then(response => response.json().list)
      .then(items => items.filter(item => this.Hour(item.dt))); 
    }
    
    Hour(dt: number): boolean {
      var itemDate = new Date(dt * 1000);
      var today = new Date();
      var tomorrow = new Date();
      var dayAfter = new Date();
      tomorrow.setDate(today.getDate() + 1);
      dayAfter.setDate(today.getDate() + 2);
      tomorrow.setHours(6);
      dayAfter.setHours(7);
      return tomorrow <= itemDate && itemDate <= dayAfter;
    }
  


}
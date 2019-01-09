import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private weather: Object = null;
  private cities: Object[];
  private query: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
   // this.weatherService.getCurrentWeather('Stockholm').then(data => this.weather = data);
  }
  

  
  onModelChange() {
    if (this.query.length > 0 ){
      this.weatherService.getCities(this.query)
                          .then(data => this.cities = data);
    } else {
      this.cities = [];
    }
  }
}

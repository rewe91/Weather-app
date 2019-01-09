import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { City } from './city';
import { WeatherService } from './weather.service';
import { TempConverter} from './tempconverter.pipe'


@Component ({
    selector: 'detail-view',
    templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
  private weather: Object;
  private city: City;
  private forecast: Object;

  constructor(private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location) {}

//Skapara en oninit för forcast och currentweather
  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.weatherService.getCurrentWeather(params.get('id')))
    .subscribe(data => this.weather = data);
    
    this.weatherService.getForeCast
    this.route.paramMap
    .switchMap((params: ParamMap) => this.weatherService.getForeCast(params.get('id')))
    .subscribe(data => this.forecast  = data);

    
}

    
  }
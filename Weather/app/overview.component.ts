import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { City } from'./city';
import { WeatherService } from './weather.service';

@Component({
    selector: 'list-view',
    templateUrl: './overview.component.html'
  })
  export class OverviewComponent implements OnInit {
    private searchCity: string;
    private cities: Object[];
    private world: WeatherService;
  
    constructor(
      private weatherService: WeatherService
    ){}

    ngOnInit(): void {}

    onModelChange() {
      this.weatherService.getCities(this.searchCity).then(data => this.cities = data)
    }
  }
  
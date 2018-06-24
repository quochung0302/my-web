import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  temp: number;
  cityName = '';

  cityName2 = '';
  isLoading = false;

  constructor(private weatherService: WeatherService) { }
  getWeather(): void {
    this.isLoading = true;
    this.weatherService.getTemp(this.cityName).then(temp => {
      this.temp = temp;
      this.cityName2 = this.cityName;
      this.cityName = '';
      this.isLoading = false;


    })
      .catch(err => {
        alert('cannot find your city!');
        this.isLoading = false;
        this.cityName = '';
      });


  }
  getMessage() {
    if (this.isLoading) {
      return 'Loading...';
    }
    return this.cityName2 === '' ? 'Enter your City name' : (this.cityName2 + ' is now ' + this.temp);

  }


  ngOnInit() {
  }

}

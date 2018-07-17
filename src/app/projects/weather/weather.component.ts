import { Component, OnInit } from '@angular/core';
import { City } from './city.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cities: City[] = [];
  isLoad = true;
  err = false;
  err2 = false;

  arrCities = ['hanoi', 'saigon'];
  cityName = '';
  onAddCity() {
    const city2 = this.cityName.replace(/\s+/g, '').toLowerCase();


    if (this.arrCities.indexOf(city2) === -1) {
      if (city2 !== '') { this.arrCities.push(city2); };
      this.creatCity(this.cityName);
      console.log(this.cities);
      this.cityName = '';

    } else {
      this.err2 = true;
      this.err = false;

    }
  }


  constructor(private http: Http) { }

  ngOnInit() {
    this.creatCities();
  }
  remove(id) {
    this.cities.splice(id, 1);
    this.arrCities.splice(id, 1);

  }
  creatCity(city) {
    this.isLoad = true;
    const city1 = city.replace(/\s+/g, '');
    // tslint:disable-next-line:max-line-length
    this.http.get('https://api.openweathermap.org/data/2.5/weather?appid=a9567f251b64e7cc1c8ad8fe2f436bdb&units=metric&q=' + city1).subscribe((res) => {
      const resJson = res.json();
      const newCity = new City(
        city,
        resJson.weather[0].description,
        resJson.main.temp,
        resJson.main.temp_min,
        resJson.main.temp_max,
        resJson.main.humidity,
        resJson.wind.speed
      );
      this.cities.push(newCity);
      this.isLoad = false;
      this.err = false;
      this.err2 = false;


    }, err => {
      this.err = true;
      this.err2 = false;
      this.isLoad = false;
    }, );



  }
  creatCities() {
    this.arrCities.forEach((city) => {
      this.creatCity(city);

    });



  }

}

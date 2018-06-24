import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { } from 'rxjs/add/operator/toPromise';
import { getOrCreateTemplateRef } from '@angular/core/src/render3/di';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: Http) { }
  getTemp(cityName: string) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=a9567f251b64e7cc1c8ad8fe2f436bdb&units=metric&q=' + cityName;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson.main.temp);

  }
}


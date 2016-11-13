import { Component, Input } from '@angular/core';
import {WeatherItem} from "./weather-item";

@Component({
  selector: 'weather-result',
  template:`
				<div class="card-box">
					<table class="table table-bordered">
						<tr class="text-center">
							<td colspan="2">{{ weatherItem.cityName }}</td>
						</tr>
						<tr>
							<td>Temprature</td>
							<td>{{ weatherItem.description }}</td>
						</tr>
						<tr>
							<td>Temprature</td>
							<td>{{ weatherItem.temperature }}°C</td>
						</tr>
					</table>
				</div>
  `
})

export class appWeatherResult {
 	weatherItem: WeatherItem;

	 constructor(){
		 this.weatherItem=new WeatherItem('Delhi', 'Rain', 32);
	 }
 }
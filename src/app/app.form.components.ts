import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
//import {WeatherItem} from "./weather-item";
import {weatherServiceComponent} from "./weather_service.component";

import 'rxjs/Rx';

@Component({
  selector: 'weather-select-form',
  template:	`
				

				<form (submit)="onSubmit()" class="card-box">
					<div class="form-group">
						<label>Email</label>
						<input type="search" class="form-control" [(ngModel)]="cityName" name="city" required>
					</div>
					<button type="submit" class="btn btn-primary btn-block" >Signup</button>
				</form>
  	`,
	  providers:[weatherServiceComponent, WeatherItem]
})

export class appFormComponent {
	getData:string;
    constructor (private _httpService: weatherServiceComponent){}
    cityName='';
    onSubmit(){
      //  console.log("Should Submit:", this.cityName);
        this._httpService.getWeatherData(this.cityName)
        .subscribe(
            data=>{ 
				const weatherItem = new WeatherItem(data.list[0].main.temp, data.list[0].weather[0].description, data.list[0].dt_txt);
				this._httpService.addWeatherItem(WeatherItem);
				console.log(data.list[0].main.temp, data.list[0].weather[0].description, data.list[0].dt_txt)},
            error => alert(error),
                () => console.log("FInished")
        );
    }
    onTestGet(delhi){
        
    }
 }
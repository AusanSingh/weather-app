import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {WeatherItem} from "./weather-item";
import {Subject} from "rxjs/Subject";
@Component({
  selector: 'weather-select-form',
  template:	`
				<form class="select-form card-box" (ngSubmit)="onSubmit(wForm)" #wForm="ngForm"> 
					<div class="form-group">
						 <input ngControl="location" type="text" id="city" class="form-control" (input)="onSearchLocation(input.value)" required #input>
					</div>
				<!---	<div class="form-group">
						<select class="form-control">
							<option value="0">Country</option>
							<option value="2">Country</option>
							<option value="3">Country</option>
						</select>
					</div>

					<div class="form-group">
						<select class="form-control">
							<option>Country</option>
							<option>Country</option>
							<option>Country</option>
						</select>
					</div>

					<div class="form-group">
						<select class="form-control">
							<option>Country</option>
							<option>Country</option>
							<option>Country</option>
						</select>
					</div>-->

					<input type="submit" name="" value="Submit" class="btn btn-primary btn-block">
				</form>
  	`
})

export class appFormComponent {
	onSubmit(form: FormGroup){
		console.log(form);
	}
 }
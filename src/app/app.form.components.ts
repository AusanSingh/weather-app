import { Component } from '@angular/core';

@Component({
  selector: 'weather-select-form',
  template:`
        <div class="container"> 
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<form class="select-form card-box"> 
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
					</div>

					<div class="form-group">
						<select class="form-control">
							<option>Country</option>
							<option>Country</option>
							<option>Country</option>
						</select>
					</div>

					<input type="submit" name="" value="Submit" class="btn btn-primary btn-block">
				</form>


				<div class="card-box">
					
				</div>
			</div>
		</div>
	</div>
  `
})

export class appFormComponent { }
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { appFormComponent } from './app.form.components';
import { appWeatherResult } from './weather_result.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
        AppComponent, 
        appFormComponent,
        appWeatherResult
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

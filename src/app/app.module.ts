import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { appFormComponent } from './app.form.components';
import { appWeatherResult } from './weather_result.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ 
        AppComponent, 
        appFormComponent,
        appWeatherResult
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

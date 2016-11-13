import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { appFormComponent } from './app.form.components';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
        AppComponent, 
        appFormComponent 
      ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

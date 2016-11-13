import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <header class="header">Weather app</header>
            <weather-select-form></weather-select-form>
            `,
  styles: [require('../css/style.scss')],
  encapsulation: ViewEncapsulation.None

})  
export class AppComponent { }

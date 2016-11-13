import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <header class="header">Weather app</header>
             <div class="container"> 
                <div class="row">
                  <div class="col-md-4 col-md-offset-4">
                        <weather-select-form></weather-select-form>
                        <weather-result></weather-result>
                  </div>
              </div>
            </div>
            `,
  styles: [require('../css/style.scss')],
  encapsulation: ViewEncapsulation.None

})  
export class AppComponent { }

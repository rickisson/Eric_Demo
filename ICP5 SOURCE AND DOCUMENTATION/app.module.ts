/**installed modules and imported countdown timer module**/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [               /**imports for installed modules**/
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeathersContainerComponent } from './weathers-container/weathers-container.component';
import { CurrentWeatherComponent } from './weathersContainer/current-weather/current-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeathersContainerComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

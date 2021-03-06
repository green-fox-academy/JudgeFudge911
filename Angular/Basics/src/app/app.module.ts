import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeathersContainerComponent } from './components/weathers-container/weathers-container.component';
import { WeatherComponent } from './components/weathers-container/weather/weather.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, NotFoundComponent, WeathersContainerComponent, WeatherComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogModule } from './dog/dog.module';
import { NavComponent } from './components/nav/nav.component';
import { DoggosModule } from './doggos/doggos.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DogModule, DoggosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

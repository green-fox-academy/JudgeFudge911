import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogRoutingModule } from './dog-routing.module';
import { DogPickerComponent } from './components/dog-picker/dog-picker.component';

@NgModule({
  imports: [
    CommonModule,
    DogRoutingModule
  ],
  declarations: [DogPickerComponent]
})
export class DogModule { }

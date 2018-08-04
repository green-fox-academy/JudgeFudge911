import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoggosRoutingModule } from './doggos-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule,
    DoggosRoutingModule
  ],
  declarations: [GalleryComponent]
})
export class DoggosModule { }

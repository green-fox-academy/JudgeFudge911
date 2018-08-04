import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogPickerComponent } from './dog/components/dog-picker/dog-picker.component';
import { GalleryComponent } from './doggos/components/gallery/gallery.component';

const routes: Routes = [
  { path: '', component: DogPickerComponent },
  { path: 'doggo-picker', component: DogPickerComponent },
  { path: 'doggos', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

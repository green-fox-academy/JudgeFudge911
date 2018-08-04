import { Component, OnInit } from '@angular/core';
import { DoggosService } from '../../../services/doggos.service';
import { DogUrl } from '../../../dog/models/dogUrl';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  likedDoggosList: DogUrl[];

  constructor(private doggosService: DoggosService) {}

  ngOnInit() {
    this.likedDoggosList = this.doggosService.getDoggos();
  }
}
